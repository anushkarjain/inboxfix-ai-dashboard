"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function FiltersTab() {
  const [filters, setFilters] = useState({
    flaggedOnly: true,
    fromLeadership: false,
    unreadOnly: false,
    meetingsOnly: false,
  });

  const toggleFilter = (filterKey: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [filterKey]: !prev[filterKey] }));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Smart Filters</h2>
        <p className="text-gray-600">Personalize what emails you want prioritized</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Email Filter Options</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(filters).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <Label htmlFor={key} className="capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </Label>
              <Switch id={key} checked={value} onCheckedChange={() => toggleFilter(key as any)} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
