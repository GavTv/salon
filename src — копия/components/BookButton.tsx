interface BookButtonProps {
  className?: string;
}

const BookButton = ({ className = "" }: BookButtonProps) => {
  return (
    <a
      href="https://wa.me/79850534761?text=Здравствуйте! Хочу записаться на приём."
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-book ${className}`}
    >
      Записаться на приём
    </a>
  );
};

export default BookButton;
