"use client"

import { useState, useMemo } from "react";
import { MapPin, Heart, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ProportionsIcon } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function OnboardingModal({ isOpen, onClose, onComplete }) {
  const [step, setStep] = useState(1)
  const progress = (step / 2) * 100

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose?.()
      }}
    >
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <div className="mb-4">
              <Progress value={progress} className="h-1" />
            </div>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              {step === 1 ? (
                <>
                <Heart className="w-6 h-6 text-purple-500" />
                What interests you?
                </>
              ) : (
                <>
                <MapPin className="w-6 h-6 text-purple-500" />
                Where are you located?
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              {step === 1 
              ? "Select at least 3 categories to personalize your experience." 
              : "Enter your location to find nearby activities."}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">


          </div>
          
          <DialogFooter>
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="button" onClick={onComplete}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
