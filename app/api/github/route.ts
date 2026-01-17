import { NextResponse } from 'next/server';

const username: string = 'Harshshah3475';
const pat: string = process.env.GITHUB_PAT as string;

export async function GET() {
  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${pat}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    color
                  }
                }
              }
            }
          }
        }`
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch GitHub data' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

