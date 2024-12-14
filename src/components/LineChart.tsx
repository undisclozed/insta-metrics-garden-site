import { Card } from "@/components/ui/card";
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

type Interval = '5min' | 'hourly' | 'daily' | 'weekly';

const generateTimeData = (interval: Interval) => {
  const now = new Date();
  const data = [];
  
  switch (interval) {
    case '5min':
      // Generate data for last 30 minutes in 5-minute intervals
      for (let i = 6; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 5 * 60000);
        data.push({
          date: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          followers: Math.floor(4000 + Math.random() * 3000),
          engagement: (3 + Math.random() * 2).toFixed(1)
        });
      }
      break;
      
    case 'hourly':
      // Generate hourly data for last 6 hours
      for (let i = 6; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 60 * 60000);
        data.push({
          date: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          followers: Math.floor(4000 + Math.random() * 3000),
          engagement: (3 + Math.random() * 2).toFixed(1)
        });
      }
      break;
      
    case 'daily':
      // Generate daily data for last 7 days
      for (let i = 6; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 24 * 60 * 60000);
        data.push({
          date: time.toLocaleDateString([], { weekday: 'short' }),
          followers: Math.floor(4000 + Math.random() * 3000),
          engagement: (3 + Math.random() * 2).toFixed(1)
        });
      }
      break;
      
    case 'weekly':
      // Generate weekly data for last 8 weeks
      for (let i = 7; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 7 * 24 * 60 * 60000);
        data.push({
          date: `Week ${i + 1}`,
          followers: Math.floor(4000 + Math.random() * 3000),
          engagement: (3 + Math.random() * 2).toFixed(1)
        });
      }
      break;
  }
  
  return data;
};

export const LineChart = () => {
  const [interval, setInterval] = useState<Interval>('5min');
  const [data, setData] = useState(() => generateTimeData('5min'));

  const handleIntervalChange = (newInterval: Interval) => {
    setInterval(newInterval);
    setData(generateTimeData(newInterval));
  };

  return (
    <Card className="p-6 h-[400px] animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Growth Trends</h3>
        <div className="flex gap-2">
          <Button 
            variant={interval === '5min' ? "default" : "outline"}
            size="sm"
            onClick={() => handleIntervalChange('5min')}
          >
            5 Min
          </Button>
          <Button 
            variant={interval === 'hourly' ? "default" : "outline"}
            size="sm"
            onClick={() => handleIntervalChange('hourly')}
          >
            Hourly
          </Button>
          <Button 
            variant={interval === 'daily' ? "default" : "outline"}
            size="sm"
            onClick={() => handleIntervalChange('daily')}
          >
            Daily
          </Button>
          <Button 
            variant={interval === 'weekly' ? "default" : "outline"}
            size="sm"
            onClick={() => handleIntervalChange('weekly')}
          >
            Weekly
          </Button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date"
            interval="preserveStartEnd"
            minTickGap={30}
          />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Line 
            yAxisId="left"
            type="monotone" 
            dataKey="followers" 
            stroke="#6E59A5" 
            strokeWidth={2}
            dot={{ fill: "#6E59A5" }}
            name="Followers"
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="engagement" 
            stroke="#00F37F" 
            strokeWidth={2}
            dot={{ fill: "#00F37F" }}
            name="Engagement Rate (%)"
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </Card>
  );
};