
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Save, Settings as SettingsIcon } from "lucide-react";

export function SettingsTab() {
  const [boostKeywords, setBoostKeywords] = useState<string[]>(["urgent", "critical", "deadline", "asap"]);
  const [newBoostKeyword, setNewBoostKeyword] = useState("");
  const [ignoredSenders, setIgnoredSenders] = useState<string[]>(["noreply@updates.com", "marketing@promotions.com"]);
  const [newIgnoredSender, setNewIgnoredSender] = useState("");
  const [ignoredDomains, setIgnoredDomains] = useState<string[]>(["spam.com", "junk-mail.net"]);
  const [newIgnoredDomain, setNewIgnoredDomain] = useState("");
  
  // Notification preferences
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [dailyDigest, setDailyDigest] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);
  const [realTimeAlerts, setRealTimeAlerts] = useState(false);

  const addBoostKeyword = () => {
    if (newBoostKeyword.trim() && !boostKeywords.includes(newBoostKeyword.trim())) {
      setBoostKeywords([...boostKeywords, newBoostKeyword.trim()]);
      setNewBoostKeyword("");
    }
  };

  const removeBoostKeyword = (keyword: string) => {
    setBoostKeywords(boostKeywords.filter(k => k !== keyword));
  };

  const addIgnoredSender = () => {
    if (newIgnoredSender.trim() && !ignoredSenders.includes(newIgnoredSender.trim())) {
      setIgnoredSenders([...ignoredSenders, newIgnoredSender.trim()]);
      setNewIgnoredSender("");
    }
  };

  const removeIgnoredSender = (sender: string) => {
    setIgnoredSenders(ignoredSenders.filter(s => s !== sender));
  };

  const addIgnoredDomain = () => {
    if (newIgnoredDomain.trim() && !ignoredDomains.includes(newIgnoredDomain.trim())) {
      setIgnoredDomains([...ignoredDomains, newIgnoredDomain.trim()]);
      setNewIgnoredDomain("");
    }
  };

  const removeIgnoredDomain = (domain: string) => {
    setIgnoredDomains(ignoredDomains.filter(d => d !== domain));
  };

  const handleSave = () => {
    console.log("Saving settings:", {
      boostKeywords,
      ignoredSenders,
      ignoredDomains,
      notifications: {
        emailNotifications,
        pushNotifications,
        dailyDigest,
        weeklyReport,
        realTimeAlerts
      }
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Settings</h2>
        <p className="text-gray-600">Customize your InboxFix AI experience</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Prioritization Rules */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SettingsIcon className="w-5 h-5 text-cisco-blue" />
              <span>Prioritization Rules</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Boost Keywords */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Keywords to Boost Priority</Label>
              <div className="flex flex-wrap gap-2">
                {boostKeywords.map(keyword => (
                  <Badge key={keyword} variant="secondary" className="bg-green-100 text-green-800">
                    {keyword}
                    <button 
                      onClick={() => removeBoostKeyword(keyword)}
                      className="ml-2 hover:bg-green-200 rounded-full p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add keyword"
                  value={newBoostKeyword}
                  onChange={(e) => setNewBoostKeyword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addBoostKeyword()}
                />
                <Button onClick={addBoostKeyword} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Ignored Senders */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Ignored Senders</Label>
              <div className="flex flex-wrap gap-2">
                {ignoredSenders.map(sender => (
                  <Badge key={sender} variant="secondary" className="bg-red-100 text-red-800">
                    {sender}
                    <button 
                      onClick={() => removeIgnoredSender(sender)}
                      className="ml-2 hover:bg-red-200 rounded-full p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add sender email"
                  value={newIgnoredSender}
                  onChange={(e) => setNewIgnoredSender(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addIgnoredSender()}
                />
                <Button onClick={addIgnoredSender} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Ignored Domains */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Ignored Domains</Label>
              <div className="flex flex-wrap gap-2">
                {ignoredDomains.map(domain => (
                  <Badge key={domain} variant="secondary" className="bg-orange-100 text-orange-800">
                    {domain}
                    <button 
                      onClick={() => removeIgnoredDomain(domain)}
                      className="ml-2 hover:bg-orange-200 rounded-full p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add domain"
                  value={newIgnoredDomain}
                  onChange={(e) => setNewIgnoredDomain(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addIgnoredDomain()}
                />
                <Button onClick={addIgnoredDomain} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SettingsIcon className="w-5 h-5 text-cisco-blue" />
              <span>Notification Preferences</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="email-notifications" className="text-sm font-medium">
                    Email Notifications
                  </Label>
                  <p className="text-xs text-gray-500">
                    Receive notifications via email
                  </p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="push-notifications" className="text-sm font-medium">
                    Push Notifications
                  </Label>
                  <p className="text-xs text-gray-500">
                    Receive browser push notifications
                  </p>
                </div>
                <Switch
                  id="push-notifications"
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="daily-digest" className="text-sm font-medium">
                    Daily Digest
                  </Label>
                  <p className="text-xs text-gray-500">
                    Receive daily summary emails
                  </p>
                </div>
                <Switch
                  id="daily-digest"
                  checked={dailyDigest}
                  onCheckedChange={setDailyDigest}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="weekly-report" className="text-sm font-medium">
                    Weekly Report
                  </Label>
                  <p className="text-xs text-gray-500">
                    Receive weekly analytics reports
                  </p>
                </div>
                <Switch
                  id="weekly-report"
                  checked={weeklyReport}
                  onCheckedChange={setWeeklyReport}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="real-time-alerts" className="text-sm font-medium">
                    Real-time Alerts
                  </Label>
                  <p className="text-xs text-gray-500">
                    Instant notifications for critical emails
                  </p>
                </div>
                <Switch
                  id="real-time-alerts"
                  checked={realTimeAlerts}
                  onCheckedChange={setRealTimeAlerts}
                />
              </div>
            </div>

            {/* Additional Settings */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <Label className="text-sm font-medium">Custom Rules (Advanced)</Label>
              <Textarea
                placeholder="Enter custom filtering rules or conditions..."
                className="min-h-[100px]"
                disabled
              />
              <p className="text-xs text-gray-500">
                This feature will be available in a future update
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <div className="flex justify-center pt-6">
        <Button 
          onClick={handleSave}
          className="bg-cisco-blue hover:bg-cisco-blue/90 text-white px-8 py-3 text-lg font-medium"
        >
          <Save className="w-5 h-5 mr-2" />
          Save Settings
        </Button>
      </div>
    </div>
  );
}
