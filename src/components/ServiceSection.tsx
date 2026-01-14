interface ServiceItem {
  name: string;
  price: string;
}

interface ServiceSectionProps {
  title: string;
  items: ServiceItem[];
}

const ServiceSection = ({ title, items }: ServiceSectionProps) => {
  return (
    <div className="service-card">
      <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-baseline gap-4 text-sm"
          >
            <span className="text-foreground/80">{item.name}</span>
            <span className="price-tag whitespace-nowrap">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSection;
