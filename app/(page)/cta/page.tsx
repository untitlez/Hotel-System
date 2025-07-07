import Image from "next/image";

export default function CTAPage() {
  return (
    <div className="relative w-full h-[50vh] mb-0">
      <Image
        src="https://readdy.ai/api/search-image?query=Modern%20luxury%20villa%20with%20clean%20architectural%20lines%2C%20large%20glass%20windows%2C%20infinity%20pool%2C%20surrounded%20by%20tropical%20landscape%2C%20professional%20real%20estate%20photography%20with%20perfect%20lighting%2C%20ultra%20high%20definition&width=400&height=300&seq=20&orientation=landscape"
        alt="Call to action"
        className="object-cover brightness-75"
        sizes="100vw"
        fill
      />
    </div>
  );
}
