export const clinic = {
  name: "MediCare",
  phone: "+91-7015103488",
  telephone: "tel:+917015103488",
  whatsappNumber: "917015103488",
  address: "26/107, 3rd Floor, West Patel Nagar, Delhi",
  directions: "https://www.google.com/maps/search/?api=1&query=26%2F107%2C%203rd%20Floor%2C%20West%20Patel%20Nagar%2C%20Delhi",
};

export function whatsappLink(message = "Hello MediCare, I would like to speak with the clinic.") {
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function enquiryLink(name: string, service: string, date: string, message: string) {
  const text = `Hello MediCare, I would like to enquire about an appointment.\nName: ${name}\nService: ${service}\nPreferred date: ${date}\n${message}`;
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
