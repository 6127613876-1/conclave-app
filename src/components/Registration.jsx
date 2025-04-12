import { FaCreditCard } from "react-icons/fa";

export default function Registration() {
  return (
    <section id="registration" className="py-12 px-6 bg-gray-100 m-32">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-center mb-4">Payment Information</h2>

        <div className="flex justify-center mb-4">
          <FaCreditCard className="text-blue-600 text-4xl" />
        </div>

        <p className="text-center text-gray-700 mb-2">
          All payments should be made through&nbsp;
          <a
            href="https://eazypay.icicibank.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://eazypay.icicibank.com
          </a>
        </p>

        <p className="text-center text-gray-700">
          <strong>Account Name:</strong> T C E SOUVENIOR CCE
        </p>

        <p className="mt-3 text-sm text-center text-gray-600 italic">
          Note: Type <strong>T</strong> <strong>C</strong> <strong>E</strong> (with spaces) in the Institution Name field to select the bank account.
        </p>
      </div>
    </section>
  );
}
