'use client';
import { X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./tabs";

const item: { name: string }[] = [
    {
        name: "Home",
    },
    {
        name: "About",
    },
    {
        name: "Portfolio",
    },
    {
        name: "Skills",
    },
    {
        name: "Contact",
    }
]

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<string   >("Home");

    useEffect(() => {
        const section = document.querySelectorAll("section");
        const observer = new IntersectionObserver((entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            })
        }), {
            threshold: 0.5
        });

        section.forEach((section) => observer.observe(section));
        return () => { observer.disconnect() };
    }, [activeTab]);
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);    
        element?.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(id);
        setMobileMenuOpen(false);
    };

    const onTabChange = (value: string) => {
        scrollToSection(value);
    }
    return (
        <nav className="fixed top-0 right-0 left-0 bg-white/90 backdrop-blur-sm z-50 border-b border-sky-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className=" text-sky-600">
                        Muhammad Raffi Fabiansyah
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Tabs value={activeTab} onValueChange={(value) => onTabChange(value)}>
                            <TabsList variant="line">
                                {item.map((item) => (
                                    <TabsTrigger value={item.name} key={item.name} className="text-gray-700 hover:text-sky-600  transition-colors data-active:text-sky-600 after:bg-sky-600">
                                        {item.name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>
                    <div className="md:hidden">
                        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X size={24} className="font-semibold" /> : <Menu size={24} className="font-semibold"/>}
                        </button>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden border-t bg-white border-sky-100">
                        <div className="px-4 py-4 space-y-3">
                            {item.map((item) => (
                                <button key={item.name} onClick={() => scrollToSection(item.name)} className={`block font-semibold w-full text-left hover:text-sky-600 transition-colors ${activeTab === item.name ? "text-sky-600" : "text-gray-700"}`}>
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}