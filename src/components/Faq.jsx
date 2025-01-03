import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const FAQSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaqDisplay = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: 'What is Netflix?',
      answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
    },
    {
      question: 'How much does Netflix cost?',
      answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`,
    },
    {
      question: 'Where can I watch?',
      answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    },
    {
      question: 'How do I cancel?',
      answer: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    },
    {
      question: 'What can I watch on Netflix?',
      answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    },
    {
      question: 'Is Netflix good for kids?',
      answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    },
  ];

  return (
    <>
      <section className="faq">
        <h1 className="heading">Frequently Asked Questions</h1>

        {faqData.map((faq, index) => (
          <div className="faq-question" key={index}>
            <div
              className="faq-box"
              onClick={() => toggleFaqDisplay(index)}
            >
              <h2>{faq.question}</h2>
              {openFaqIndex === index ? <ImCross className='cross' /> : <FaPlus className='plus' />}

            </div>
            {openFaqIndex === index && (
              <h2 className="faq-ans">{faq.answer}</h2>
            )}
          </div>
        ))}

        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="sign-process">
          <input type="email" name="Email" placeholder="Email address" />
          <button className="btn started" type="submit">
            Get Started <i className="fa-solid fa-greater-than icon"></i>
          </button>
        </div>
      </section>
      <div className="separation"></div></>
  );
};

export default FAQSection;
