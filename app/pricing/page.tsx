import PricingForm from "./components/PricingForm";
import PricingResults from "./components/PricingResults";

export default function PricingPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Pricing Engine</h1>
      <PricingForm />
      <PricingResults />
    </div>
  );
}
