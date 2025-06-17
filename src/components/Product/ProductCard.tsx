type Currencies = "RUB" | "USD" | "EUR";

type Props = {
  title: string;
  origin: string;
  price?: number;
  currency: Currencies;
  imageUrl: string;
};

type ConvertedPrice = {
  price: number;
  currency: Currencies;
  locale?: string;
};

export default function ProductCard(props: Props) {
  const { title, origin, price = 34900, currency, imageUrl } = props;

  const description =
    "100% арабика из высокогорных регионов Колумбии. Богатый аромат с нотами шоколада, карамели и лёгкой кислинкой. Средняя обжарка подходит как для эспрессо, так и для альтернативных способов заваривания. Свежая обжарка, вакуумная упаковка — максимум вкуса в каждой чашке.";

  const rates = {
    RUB: 100,
    USD: 9000,
    EUR: 9700,
  };

  function сonvertedPrice({
    price,
    currency,
    locale = "ru-RU",
  }: ConvertedPrice) {
    const getPrice = price / rates[currency];
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(getPrice);
  }

  return (
    <div className="flex flex-col sm:flex-row bg-white border rounded-2xl shadow-lg max-w-4xl mx-auto overflow-hidden">
      <div className="flex-shrink-0 flex justify-center items-center bg-white p-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-[250px] h-[250px] object-cover rounded-xl"
        />
      </div>
      <div className="p-6 flex flex-col justify-between flex-grow text-black">
        <div>
          <h2 className="text-2xl font-bold mb-3">{title}</h2>
          <h3 className="text-lg font-bold mb-3">{origin}</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-6 text-2xl font-semibold text-green-600">
          {сonvertedPrice({ currency, price })}
        </div>
      </div>
    </div>
  );
}
