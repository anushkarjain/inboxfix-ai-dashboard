
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock, User, Send } from "lucide-react";

const mockDigestEmails = [
  {
    id: 1,
    sender: "Sarah Johnson",
    subject: "Q1 Budget Review Meeting",
    preview: "Hi team, I wanted to schedule our quarterly budget review meeting for next week. Please review the attached...",
    importance: "High",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    sender: "JIRA System",
    subject: "Critical Bug Report #JB-1234",
    preview: "A critical bug has been reported in the production environment. The issue affects user authentication and requires...",
    importance: "High",
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    sender: "Mike Chen",
    subject: "Code Review Required",
    preview: "Please review the pull request for the new API endpoints. The changes include enhanced security measures and...",
    importance: "Medium",
    timestamp: "6 hours ago",
  },
  {
    id: 4,
    sender: "IT Security",
    subject: "Monthly Security Update",
    preview: "This month's security report shows improvements in our threat detection capabilities. We've successfully...",
    importance: "Medium",
    timestamp: "1 day ago",
  },
  {
    id: 5,
    sender: "Marketing Team",
    subject: "Campaign Performance Report",
    preview: "The latest marketing campaign has exceeded expectations with a 25% increase in conversion rates. Here's a detailed...",
    importance: "Low",
    timestamp: "1 day ago",
  },
];

const importanceColors = {
  High: "bg-red-100 text-red-800 border-red-200",
  Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Low: "bg-green-100 text-green-800 border-green-200",
};

export function DigestTab() {
  const handleSendPreview = () => {
    console.log("Sending digest preview to email...");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Daily Digest Preview</h2>
        <p className="text-gray-600">Preview of your top 5 email alerts for today</p>
      </div>

      {/* Digest Header */}
      <Card className="bg-gradient-to-r from-cisco-blue/5 to-cisco-blue/10 border-cisco-blue/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-cisco-blue rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-cisco-blue">
                  Daily Email Digest
                </CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  Generated on {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              {mockDigestEmails.length} emails
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Email Previews */}
      <div className="space-y-4">
        {mockDigestEmails.map((email, index) => (
          <Card key={email.id} className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{email.sender}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{email.timestamp}</span>
                    </div>
                  </div>
                </div>
                <Badge 
                  variant="outline" 
                  className={importanceColors[email.importance as keyof typeof importanceColors]}
                >
                  {email.importance}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800 leading-tight">
                  {email.subject}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {email.preview}
                </p>
              </div>
              
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Email #{index + 1} of {mockDigestEmails.length}</span>
                  <span>Priority: {email.importance}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Send Preview Button */}
      <div className="flex justify-center pt-6">
        <Button 
          onClick={handleSendPreview}
          className="bg-cisco-blue hover:bg-cisco-blue/90 text-white px-8 py-3 text-lg font-medium"
        >
          <Send className="w-5 h-5 mr-2" />
          Send Preview to Email
        </Button>
      </div>
    </div>
  );
}
