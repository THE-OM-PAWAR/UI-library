"use client";

import * as React from "react";
// Yahan apne asli component ko import karo
import { DirectionProvider } from "@repo/components"; 

export const renderDirection = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            {/* LTR Preview */}
            <DirectionProvider dir="ltr">
                <div className="p-4 border rounded-md bg-muted/20">
                    <p className="text-sm font-bold">Left-to-Right (LTR):</p>
                    <p>This text starts from the left.</p>
                </div>
            </DirectionProvider>

            {/* RTL Preview */}
            <DirectionProvider dir="rtl">
                <div className="p-4 border rounded-md bg-muted/20">
                    <p className="text-sm font-bold">Right-to-Left (RTL):</p>
                    <p>یہ تحریر دائیں سے شروع ہوتی ہے۔ (This text starts from right)</p>
                </div>
            </DirectionProvider>
        </div>
    );
};