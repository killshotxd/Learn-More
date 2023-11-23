import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const accordionData = [
    {
      question: "How do I get started?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?",
    },
    {
      question: "What is the difference between a free and paid account?",
      answer: "Your answer for the second question goes here.",
    },
    // Add more objects for additional questions
  ];
  return (
    <>
      {/* <section className="min-h-[70vh] py-16 px-16"> */}
      {/* <div>
          <h2 className="text-3xl font-semibold text-center ">
            Frequently Asked Questions
          </h2>
        </div> */}

      <section className="mx-auto max-w-8xl  py-16 px-16">
        <div>
          <div className="mx-auto max-w-3xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
              assumenda
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="flex text-lg font-semibold text-black">
                    {item.question}
                  </span>
                  {openIndex === index ? (
                    <FaChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <FaChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-500">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="textbase mt-6 text-center text-gray-600">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="#"
              title=""
              className="font-semibold text-black hover:underline"
            >
              Contact our support
            </a>
          </p>
        </div>
      </section>
      {/* </section> */}
    </>
  );
};

export default Faq;
