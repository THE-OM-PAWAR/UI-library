import React from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './index';

export const HoverCardDemo = () => (
  <div className="p-20 flex justify-center">
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer underline font-medium text-blue-600">
          Mera Naya Component (Hover Me)
        </span>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold text-slate-900">Abdul Ayub Ali</h4>
          <p className="text-sm text-slate-500">BCA Final Year - Hover Card Success!</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
);