"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // Add your form submission logic here (e.g., send data to API)
    };

    return (
        <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto flex justify-center">
                <Card className="w-full max-w-lg">
                    <CardHeader>
                        <CardTitle>Contact with Me</CardTitle>
                        <CardDescription>
                            We’d love to hear from you! Fill out the form below to get in touch.
                        </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-4">
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="w-full">
                                Submit
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    );
};
