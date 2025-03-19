import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CalendarIcon } from "lucide-react";

const styles = {
    container: {
        border: "4px solid #1E3A8A", // Blue border
        backgroundColor: "#FFFFFF", // White background
        color: "black",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
    },
    header: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "16px"
    },
    button: {
        display: "flex",
        alignItems: "center",
        padding: "8px 12px",
        border: "2px solid #1E3A8A",
        borderRadius: "8px",
        backgroundColor: "transparent",
        color: "#1E3A8A",
        cursor: "pointer",
        fontWeight: "bold"
    },
    icon: {
        width: "20px",
        height: "20px",
        marginRight: "8px"
    }
};

export default function Important() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="border-4 border-blue-900 bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      {/* Announcements Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Announcements</h2>
        <Button
          onClick={() => setIsCalendarOpen(true)}
          variant="outline"
          className="flex items-center"
        >
          <CalendarIcon className="w-5 h-5 mr-2" />
          Holiday Calendar
        </Button>
      </div>

      {/* Announcement Cards */}
      <Card className="mb-3">
        <CardContent className="p-3 font-semibold">
          Nostalgia 2025 Coming Soon
        </CardContent>
      </Card>

      <Card className="mb-3 h-12 flex items-center justify-center">
        <CardContent className="p-3 text-gray-500">
          New Notice Here...
        </CardContent>
      </Card>

      <Card className="mb-3 h-12 flex items-center justify-center">
        <CardContent className="p-3 text-gray-500">
          New Notice Here...
        </CardContent>
      </Card>

      {/* Holiday Calendar Modal */}
      <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Holiday Calendar</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
