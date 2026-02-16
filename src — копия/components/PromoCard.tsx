interface PromoCardProps {
  image: string;
  title: string;
  description: string;
}

const PromoCard = ({ image, title, description }: PromoCardProps) => {
  return (
    <div className="promo-card">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-xl text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PromoCard;
