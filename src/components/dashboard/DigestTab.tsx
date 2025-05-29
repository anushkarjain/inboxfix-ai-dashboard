
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock, User, Send, CheckCircle, Sparkles } from "lucide-react";

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
  High: "bg-red-50 text-red-700 border-red-200",
  Medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Low: "bg-green-50 text-green-700 border-green-200",
};

export function DigestTab() {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSendPreview = () => {
    setIsEmailSent(true);
    setTimeout(() => setIsEmailSent(false), 3000);
    console.log("Sending digest preview to email...");
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-br from-cisco-blue to-cisco-blue-dark rounded-lg">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cisco-dark to-cisco-blue bg-clip-text text-transparent">
            Daily Digest Preview
          </h2>
          <p className="text-cisco-gray-dark">Preview of your top 5 email alerts for today</p>
        </div>
      </div>

      {/* Digest Header */}
      <Card className="bg-gradient-to-r from-cisco-blue/5 via-white to-cisco-purple/5 border-cisco-blue/20 shadow-xl shadow-gray-200/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-cisco-blue to-cisco-blue-dark rounded-xl shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl bg-gradient-to-r from-cisco-blue to-cisco-dark bg-clip-text text-transparent">
                  Daily Email Digest
                </CardTitle>
                <p className="text-sm text-cisco-gray-dark mt-1 font-medium">
                  Generated on {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-cisco-green/10 text-cisco-green border-cisco-green/20 px-4 py-2 text-sm font-semibold">
              {mockDigestEmails.length} emails
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Email Previews */}
      <div className="space-y-4">
        {mockDigestEmails.map((email, index) => (
          <Card key={email.id} className="hover-lift border-0 shadow-lg shadow-gray-200/50 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cisco-blue/20 to-cisco-purple/20 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-cisco-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-cisco-dark text-lg">{email.sender}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-4 h-4 text-cisco-gray-dark" />
                      <span className="text-sm text-cisco-gray-dark font-medium">{email.timestamp}</span>
                    </div>
                  </div>
                </div>
                <Badge 
                  variant="outline" 
                  className={`${importanceColors[email.importance as keyof typeof importanceColors]} font-semibold px-3 py-1`}
                >
                  {email.importance}
                </Badge>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-cisco-dark text-lg leading-tight">
                  {email.subject}
                </h4>
                <p className="text-cisco-gray-dark leading-relaxed">
                  {email.preview}
                </p>
              </div>
              
              <div className="mt-5 pt-4 border-t border-cisco-blue/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-cisco-gray-dark font-medium">Email #{index + 1} of {mockDigestEmails.length}</span>
                  <span className="text-cisco-blue font-semibold">Priority: {email.importance}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Send Preview Button */}
      <div className="flex justify-center pt-8">
        <Button 
          onClick={handleSendPreview}
          disabled={isEmailSent}
          className={`px-10 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 ${
            isEmailSent 
              ? "bg-cisco-green hover:bg-cisco-green text-white animate-pulse-success" 
              : "bg-gradient-to-r from-cisco-blue to-cisco-blue-dark hover:from-cisco-blue-dark hover:to-cisco-blue text-white hover:shadow-xl hover:scale-105"
          }`}
        >
          {isEmailSent ? (
            <>
              <CheckCircle className="w-6 h-6 mr-3" />
              Email Sent Successfully!
            </>
          ) : (
            <>
              <Send className="w-6 h-6 mr-3" />
              Send Preview to Email
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
