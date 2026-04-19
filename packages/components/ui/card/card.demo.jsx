import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './card.jsx';
import { Button } from '../button/button.jsx';

export function CardDemo() {
  return (
    <div className="max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            This is a description for the card.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p>This is the main content area.</p>
        </CardContent>

        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
    </div>
  );
}