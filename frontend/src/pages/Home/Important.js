import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarIcon } from "lucide-react";

const Important = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      border: "4px solid #1E3A8A",
      backgroundColor: "#FFFFFF",
      color: "black",
      padding: "24px",
      borderRadius: "12px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
    }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>
        Important Information
      </h2>
      <Button
        onClick={() => setOpen(true)}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "8px 12px",
          border: "2px solid #1E3A8A",
          borderRadius: "8px",
          backgroundColor: "transparent",
          color: "#1E3A8A",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        <CalendarIcon style={{ marginRight: "8px" }} /> Open Dialog
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Details</DialogTitle>
          </DialogHeader>
          <Card>
            <CardContent>
              <p>This is some important content inside the dialog.</p>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Important;

