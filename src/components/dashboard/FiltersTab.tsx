
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { X, Plus } from "lucide-react";

const mockSenders = [
  "Sarah Johnson", "JIRA System", "Mike Chen", "Webex Teams", "IT Security",
  "HR Department", "Marketing Team", "Finance Team"
];

const mockProjects = [
  "Project Alpha", "Beta Release", "Customer Portal", "Security Audit",
  "Mobile App", "Database Migration", "Cloud Migration"
];

export function FiltersTab() {
  const [selectedSenders, setSelectedSenders] = useState<string[]>(["JIRA System", "IT Security"]);
  const [selectedProjects, setSelectedProjects] = useState<string[]>(["Project Alpha"]);
  const [keywords, setKeywords] = useState<string[]>(["urgent", "critical", "meeting"]);
  const [newKeyword, setNewKeyword] = useState("");
  const [timeRange, setTimeRange] = useState("7days");
  const [onlyImportant, setOnlyImportant] = useState(true);

  const addKeyword = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim())) {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword("");
    }
  };

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter(k => k !== keyword));
  };

  const toggleSender = (sender: string) => {
    setSelectedSenders(prev => 
      prev.includes(sender) 
        ? prev.filter(s => s !== sender)
        : [...prev, sender]
    );
  };

  const toggleProject = (project: string) => {
    setSelectedProjects(prev => 
      prev.includes(project) 
        ? prev.filter(p => p !== project)
        : [...prev, project]
    );
  };

  const applyFilters = () => {
    console.log("Applying filters:", {
      selectedSenders,
      selectedProjects,
      keywords,
      timeRange,
      onlyImportant
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Email Filters</h2>
        <p className="text-gray-600">Customize your email filtering preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sender Filter */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Filter by Sender</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {selectedSenders.map(sender => (
                <Badge key={sender} variant="secondary" className="bg-cisco-blue/10 text-cisco-blue">
                  {sender}
                  <button 
                    onClick={() => toggleSender(sender)}
                    className="ml-2 hover:bg-cisco-blue/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <Select onValueChange={toggleSender}>
              <SelectTrigger>
                <SelectValue placeholder="Add sender to filter" />
              </SelectTrigger>
              <SelectContent>
                {mockSenders.filter(sender => !selectedSenders.includes(sender)).map(sender => (
                  <SelectItem key={sender} value={sender}>{sender}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Project Filter */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Filter by Project</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {selectedProjects.map(project => (
                <Badge key={project} variant="secondary" className="bg-green-100 text-green-800">
                  {project}
                  <button 
                    onClick={() => toggleProject(project)}
                    className="ml-2 hover:bg-green-200 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <Select onValueChange={toggleProject}>
              <SelectTrigger>
                <SelectValue placeholder="Add project to filter" />
              </SelectTrigger>
              <SelectContent>
                {mockProjects.filter(project => !selectedProjects.includes(project)).map(project => (
                  <SelectItem key={project} value={project}>{project}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Keywords Filter */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Filter by Keywords</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {keywords.map(keyword => (
                <Badge key={keyword} variant="secondary" className="bg-purple-100 text-purple-800">
                  {keyword}
                  <button 
                    onClick={() => removeKeyword(keyword)}
                    className="ml-2 hover:bg-purple-200 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Add keyword"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
              />
              <Button onClick={addKeyword} size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Time Range & Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Additional Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="timeRange" className="text-sm font-medium">Time Range</Label>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1day">Last 24 hours</SelectItem>
                  <SelectItem value="3days">Last 3 days</SelectItem>
                  <SelectItem value="7days">Last week</SelectItem>
                  <SelectItem value="30days">Last month</SelectItem>
                  <SelectItem value="all">All time</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="importance-toggle" className="text-sm font-medium">
                  Email Priority
                </Label>
                <p className="text-xs text-gray-500">
                  {onlyImportant ? "Show only important emails" : "Show all emails"}
                </p>
              </div>
              <Switch
                id="importance-toggle"
                checked={onlyImportant}
                onCheckedChange={setOnlyImportant}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Apply Filters Button */}
      <div className="flex justify-center">
        <Button 
          onClick={applyFilters} 
          className="bg-cisco-blue hover:bg-cisco-blue/90 text-white px-8 py-2"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
}
