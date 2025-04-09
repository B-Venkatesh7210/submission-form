'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <h1 className="text-3xl font-bold text-green-700">Thanks for signing up!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="firstName"
              placeholder="First Name"
              className="w-full"
            />
            <Input
              id="lastName"
              placeholder="Last Name"
              className="w-full"
            />
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full"
            />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full"
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}