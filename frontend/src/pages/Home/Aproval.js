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

const Approval = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      border: "4px solid #1E3A8A",
      backgroundColor: "#FFFFFF",
      color: "black",
      padding: "24px",
      borderRadius: "12px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      marginBottom: "20px"
    }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>
        Accreditation & Approvals
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
        <CalendarIcon style={{ marginRight: "8px" }} /> View Approvals
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Approval Details</DialogTitle>
          </DialogHeader>
          <Card>
            <CardContent>
              <p>This section contains accreditation and approval details.</p>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Approval;
