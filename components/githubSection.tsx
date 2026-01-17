"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { Github } from "lucide-react";

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface ContributionData {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          weeks: Week[];
        };
      };
    };
  };
}

const GithubSection = () => {
  const [contributions, setContributions] = useState<Week[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalContributions, setTotalContributions] = useState(0);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) {
          throw new Error("Failed to fetch contributions");
        }
        const data: ContributionData = await response.json();
        const weeks =
          data.data.user.contributionsCollection.contributionCalendar.weeks;
        setContributions(weeks);

        // Calculate total contributions
        const total = weeks.reduce((sum, week) => {
          return (
            sum +
            week.contributionDays.reduce(
              (daySum, day) => daySum + day.contributionCount,
              0
            )
          );
        }, 0);
        setTotalContributions(total);

        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  const getContributionColor = (count: number) => {
    if (count === 0) return isDarkMode ? "#161b22" : "#ebedf0";
    if (count < 5) return isDarkMode ? "#0e4429" : "#9be9a8";
    if (count < 10) return isDarkMode ? "#006d32" : "#40c463";
    if (count < 15) return isDarkMode ? "#26a641" : "#30a14e";
    return isDarkMode ? "#39d353" : "#216e39";
  };

  const handleMouseEnter = (
    day: ContributionDay,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    setHoveredDay(day);
    const rect = (event.target as HTMLElement).getBoundingClientRect();

    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
  };

  const handleMouseLeave = () => {
    setHoveredDay(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const monthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  if (loading) {
    return (
      <section className="max-w-2xl mx-auto px-6 py-12">
        <div
          className={`${
            isDarkMode ? "text-white" : "text-zinc-900"
          } text-center`}
        >
          <p>Loading GitHub contributions...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-2xl mx-auto px-6 py-12">
        <div
          className={`${
            isDarkMode ? "text-red-400" : "text-red-600"
          } text-center`}
        >
          <p>Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`max-w-2xl mx-auto px-6 py-2 ${
          isDarkMode ? "border-white/5" : "border-black/5"
        } pt-12 border-b pb-12`}>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${isDarkMode
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(0, 0, 0, 0.05)"};
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${isDarkMode
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(0, 0, 0, 0.2)"};
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${isDarkMode
            ? "rgba(255, 255, 255, 0.3)"
            : "rgba(0, 0, 0, 0.3)"};
        }

        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: ${isDarkMode
            ? "rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05)"
            : "rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.05)"};
        }
      `}</style>
      <div
        className={`${
          isDarkMode ? "border-white/5" : "border-black/5"
        } pt-12 border-t border-zinc-200 dark:border-zinc-800`}
      >
        {/* Header */}
        <div className="mb-8">
          <p
            className={`text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase mb-2 ${
              isDarkMode ? "text-zinc-600" : "text-zinc-400"
            }`}
          >
            Open Source Activity
          </p>
          <div className="flex items-baseline gap-4 mb-4 w-full justify-between">
            <span className="flex gap-2 align-middle">
              <h3
                className={`text-4xl md:text-4xl font-serif italic ${
                  isDarkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                GitHub
              </h3>
              <h3
                className={`text-2xl md:text-3xl font-light ${
                  isDarkMode ? "text-zinc-600" : "text-zinc-400"
                }`}
              >
                Contributions
              </h3>
            </span>
          
              <a
                href="https://github.com/Harshshah3475/"
                target="_blank"
                className="p-2.5 rounded-full border border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                aria-label="GitHub"
              >
                <Github size={25} strokeWidth={1.5} />
              </a>
      
          </div>
          <p
            className={`text-sm ${
              isDarkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {totalContributions} contributions in the last year
          </p>
        </div>

        {/* Contribution Graph */}
        <div
          className="overflow-x-auto pb-4 custom-scrollbar"
          ref={containerRef}
        >
          <div className="inline-block min-w-full">
            <div className="relative">
              {/* Day labels */}
              <div className="flex">
                <div
                  className="flex flex-col justify-between pr-2 text-[9px]"
                  style={{ height: "105px" }}
                >
                  {dayLabels
                    .filter((_, i) => i % 2 === 1)
                    .map((day, i) => (
                      <div
                        key={i}
                        className={`${
                          isDarkMode ? "text-zinc-600" : "text-zinc-400"
                        } h-[10px] flex items-center`}
                      >
                        {day}
                      </div>
                    ))}
                </div>

                {/* Graph */}
                <div className="flex-1">
                  {/* Month labels */}
                  <div className="flex mb-1 text-[9px]">
                    {contributions.map((week, weekIndex) => {
                      const firstDay = week.contributionDays[0];
                      const date = new Date(firstDay.date);
                      const isFirstWeekOfMonth = date.getDate() <= 7;

                      return (
                        <div
                          key={weekIndex}
                          style={{ width: "11px", marginRight: "3px" }}
                        >
                          {isFirstWeekOfMonth && (
                            <span
                              className={`${
                                isDarkMode ? "text-zinc-600" : "text-zinc-400"
                              }`}
                            >
                              {monthLabels[date.getMonth()]}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Contribution squares */}
                  <div className="flex gap-[3px]">
                    {contributions.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-[3px]">
                        {week.contributionDays.map((day, dayIndex) => (
                          <div
                            key={dayIndex}
                            className="w-[10px] h-[10px] rounded-sm cursor-pointer transition-all hover:ring-2 hover:ring-offset-1 hover:ring-blue-500"
                            style={{
                              backgroundColor: getContributionColor(
                                day.contributionCount
                              ),
                            }}
                            onMouseEnter={(e) => handleMouseEnter(day, e)}
                            onMouseLeave={handleMouseLeave}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tooltip */}
              {hoveredDay && (
                <div
                  className={`fixed z-[9999] px-3 py-2 rounded-md shadow-lg text-xs whitespace-nowrap pointer-events-none ${
                    isDarkMode
                      ? "bg-zinc-800 text-white border border-zinc-700"
                      : "bg-white text-zinc-900 border border-zinc-200"
                  }`}
                  style={{
                    left: `${tooltipPosition.x}px`,
                    top: `${tooltipPosition.y}px`,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  <div className="font-semibold">
                    {hoveredDay.contributionCount}{" "}
                    {hoveredDay.contributionCount === 1
                      ? "contribution"
                      : "contributions"}
                  </div>
                  <div
                    className={`${
                      isDarkMode ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {formatDate(hoveredDay.date)}
                  </div>
                </div>
              )}
            </div>

            {/* Legend */}
            <div className="flex items-center  gap-2 mt-4">
              <span
                className={`text-[10px] ${
                  isDarkMode ? "text-zinc-600" : "text-zinc-400"
                }`}
              >
                Less
              </span>
              <div className="flex gap-1">
                {[0, 1, 5, 10, 15].map((level, i) => (
                  <div
                    key={i}
                    className="w-[10px] h-[10px] rounded-sm"
                    style={{ backgroundColor: getContributionColor(level) }}
                  />
                ))}
              </div>
              <span
                className={`text-[10px] ${
                  isDarkMode ? "text-zinc-600" : "text-zinc-400"
                }`}
              >
                More
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
