
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Mail, AlertTriangle, CheckCircle, TrendingUp, BarChart3 } from "lucide-react";
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const mockChartData7Days = [
  { day: "Mon", alerts: 45 },
  { day: "Tue", alerts: 52 },
  { day: "Wed", alerts: 38 },
  { day: "Thu", alerts: 67 },
  { day: "Fri", alerts: 41 },
  { day: "Sat", alerts: 23 },
  { day: "Sun", alerts: 18 },
];

const mockChartData30Days = [
  { day: "Week 1", alerts: 284 },
  { day: "Week 2", alerts: 312 },
  { day: "Week 3", alerts: 245 },
  { day: "Week 4", alerts: 298 },
];

const kpiCards = [
  {
    title: "Important Emails Today",
    value: "12",
    icon: Mail,
    color: "text-cisco-blue",
    bgColor: "bg-cisco-blue/10",
    description: "High-priority emails requiring attention"
  },
  {
    title: "Total Alerts Received",
    value: "284",
    icon: AlertTriangle,
    color: "text-cisco-purple",
    bgColor: "bg-cisco-purple/10",
    description: "All email notifications this week"
  },
  {
    title: "Daily Digest Status",
    value: "✓ Sent",
    icon: CheckCircle,
    color: "text-cisco-green",
    bgColor: "bg-cisco-green/10",
    description: "Today's summary delivered successfully"
  },
  {
    title: "Weekly Trend",
    value: "+15%",
    icon: TrendingUp,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    description: "Email volume compared to last week"
  },
];

const barColors = ["#00BCEB", "#AE63E4", "#5AC8B0", "#F59E0B"];

export function HomeTab() {
  const [timeRange, setTimeRange] = useState("7days");
  
  const chartData = timeRange === "7days" ? mockChartData7Days : mockChartData30Days;

  return (
    <TooltipProvider>
      <div className="space-y-8 animate-fade-in">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-cisco-blue to-cisco-blue-dark rounded-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cisco-dark to-cisco-blue bg-clip-text text-transparent">
              Dashboard Overview
            </h2>
            <p className="text-cisco-gray-dark">Your personalized email management insights</p>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiCards.map((card, index) => (
            <UITooltip key={index}>
              <TooltipTrigger asChild>
                <Card className="hover-lift border-0 shadow-lg shadow-gray-200/50 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-cisco-gray-dark mb-2">{card.title}</p>
                        <p className="text-3xl font-bold text-cisco-dark">{card.value}</p>
                      </div>
                      <div className={`p-4 rounded-2xl ${card.bgColor} shadow-inner`}>
                        <card.icon className={`w-7 h-7 ${card.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent className="bg-cisco-dark text-white">
                {card.description}
              </TooltipContent>
            </UITooltip>
          ))}
        </div>

        {/* Chart */}
        <Card className="border-0 shadow-xl shadow-gray-200/50 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold text-cisco-dark flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-cisco-blue" />
                <span>Alert Volume Trends</span>
              </CardTitle>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-40 border-cisco-blue/20 focus:border-cisco-blue">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 Days</SelectItem>
                  <SelectItem value="30days">Last 30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" opacity={0.5} />
                  <XAxis 
                    dataKey="day" 
                    stroke="#6b7280" 
                    fontSize={12}
                    fontWeight={500}
                  />
                  <YAxis 
                    stroke="#6b7280" 
                    fontSize={12}
                    fontWeight={500}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#005073',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.25)',
                      fontWeight: 500
                    }}
                    cursor={{ fill: 'rgba(0, 188, 235, 0.1)' }}
                  />
                  <Bar 
                    dataKey="alerts" 
                    radius={[8, 8, 0, 0]}
                    className="animate-bar-grow"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
}
