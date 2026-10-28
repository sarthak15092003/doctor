import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, HeartPulse, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { clinic, whatsappLink } from "@/lib/clinic";

const navigation = [
  { to: "/", label: "Home" }, { to: "/services", label: "Our services" },
  { to: "/about", label: "About us" }, { to: "/blog", label: "Health journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Brand() {
  return <Link to="/" className="brand" aria-label="MediCare home"><span className="brand-symbol"><HeartPulse /></span><span>Medi<span className="text-primary">Care</span><small>HEALTH CLINIC</small></span></Link>;
}

export function ClinicLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });
  return <>
    <div className="topline"><div className="site-container"><span><MapPin size={13} /> West Patel Nagar, New Delhi</span><a href={clinic.telephone}><Phone size={12} /> {clinic.phone}</a></div></div>
    <header className="site-header"><div className="site-container header-inner"><Brand />
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.to} to={item.to} className={pathname === item.to ? "active" : ""}>{item.label}</Link>)}</nav>
      <Button asChild size="lg" className="header-book whatsapp-button"><a href={whatsappLink("Hello MediCare, I would like to consult a doctor on WhatsApp.")} target="_blank" rel="noreferrer"><WhatsAppIcon size={18} /> WhatsApp Now</a></Button>
      <Button variant="ghost" size="icon" className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
    </div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>)}<a href={whatsappLink("Hello MediCare, I would like to consult a doctor on WhatsApp.")} target="_blank" rel="noreferrer" className="flex items-center justify-between text-base font-medium py-1" onClick={() => setOpen(false)}><span>WhatsApp Now</span><ArrowUpRight size={16} /></a></nav>}</header>
    <main>{children}</main>
    <footer className="site-footer"><div className="site-container footer-grid"><div><Brand /><p>Thoughtful healthcare.<br />For you. For your family.</p></div><div><h3>Explore</h3>{navigation.slice(1).map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div><div><h3>Visit our clinic</h3><p>{clinic.address}</p><a href={clinic.directions} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={14} /></a></div><div><h3>Let’s talk</h3><a href={clinic.telephone} className="footer-phone">{clinic.phone}</a><div className="footer-actions"><Button asChild size="lg" className="footer-btn-whatsapp whatsapp-button"><a href={whatsappLink("Hello MediCare, I would like to consult a doctor on WhatsApp.")} target="_blank" rel="noreferrer"><WhatsAppIcon size={18} /> WhatsApp Now</a></Button><Button asChild size="lg" variant="outline" className="footer-btn-call"><a href={clinic.telephone}><Phone size={18} /> Call Now</a></Button></div></div></div><div className="site-container footer-bottom"><span>© {new Date().getFullYear()} MediCare Health Clinic.</span><span>Made for healthier tomorrows.</span></div></footer>
    <div className="contact-dock"><a href={clinic.telephone} className="contact-dock-call" aria-label={`Call the clinic on ${clinic.phone}`} title={`Call ${clinic.phone}`}><Phone /></a><a href={whatsappLink()} target="_blank" rel="noreferrer" className="contact-dock-whatsapp" aria-label="Message the clinic on WhatsApp" title="Chat on WhatsApp"><WhatsAppIcon size={24} /></a></div>
  </>;
}
