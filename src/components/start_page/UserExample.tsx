import { useEffect, useState, useRef } from "react";

interface UserExampleProps {
  className?: string;
  imageSrc: string;
  name: string;
  jobTitle: string;
  preview?: boolean;
}

interface Review {
  name: string;
  review: string;
}

// Add multilingual review interface
interface MultilingualReview {
  he: Review;
  en: Review;
}

const UserExample: React.FC<UserExampleProps> = ({
  imageSrc,
  className,
  name,
  jobTitle,
  preview,
}) => {
  const [language, setLanguage] = useState<"he" | "en">("he");
  const componentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [randomReviews, setRandomReviews] = useState<Review[]>([]);
  const [currentReviewSet, setCurrentReviewSet] = useState(0);

  const randomFloat = (min: number, max: number) => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  };

  // Combined multilingual reviews
const reviews: MultilingualReview[] = [
  {
    he: {
      name: "אברהם כהן",
      review: "השירות הזה שינה את החיים שלי לטובה. הייתי משלם עליו בכיף.",
    },
    en: {
      name: "Michael Turner",
      review: "This service completely changed my workflow!",
    },
  },
  {
    he: {
      name: "שרה לוי",
      review: "שירות מעולה, אשמח להשתמש שוב גם אם יעלה כסף בעתיד.",
    },
    en: {
      name: "Emily Wilson",
      review: "Excellent service! Will definitely use again.",
    },
  },
  {
    he: {
      name: "יעקב ישראלי",
      review: "קיבלתי בחינם, אבל היה שווה הרבה יותר. שירות מדהים!",
    },
    en: {
      name: "James Reynolds",
      review: "Amazing service! Exceeded my expectations.",
    },
  },
  {
    he: {
      name: "רחל גולדברג",
      review: "התאהבתי בשירות מהרגע הראשון. הייתי משלמת עליו בשמחה.",
    },
    en: {
      name: "Jessica Baker",
      review: "Love this service from day one!",
    },
  },
  {
    he: {
      name: "משה פרידמן",
      review: "טיפול מהיר ויחס אישי. אשמח לשלם בעתיד עבור שירות כזה.",
    },
    en: {
      name: "Robert Parker",
      review: "Fast response and personalized attention.",
    },
  },
  {
    he: {
      name: "חנה רוזנברג",
      review: "לא האמנתי שאקבל שירות כל כך טוב בחינם. היה שווה כל שקל!",
    },
    en: {
      name: "Olivia Johnson",
      review: "Can't believe how good this service is!",
    },
  },
  {
    he: {
      name: "דוד שפירא",
      review: "אני כבר משתמש קבוע, אפילו אם יתחילו לגבות תשלום אמשיך להשתמש.",
    },
    en: {
      name: "Thomas Wright",
      review: "Loyal user and not stopping anytime soon.",
    },
  },
  {
    he: {
      name: "מרים אברמוביץ'",
      review: "הייתי סקפטית בהתחלה, אבל השירות שווה הרבה מעבר למה שחשבתי.",
    },
    en: {
      name: "Amanda Collins",
      review: "Skeptical at first, now I'm a believer!",
    },
  },
  {
    he: {
      name: "יוסף ברגמן",
      review: "הייתי משלם על שירות כזה בכיף. אני ממליץ לכל החברים שלי.",
    },
    en: {
      name: "Daniel Smith",
      review: "Recommending this to everyone I know!",
    },
  },
  {
    he: {
      name: "אסתר ויינשטיין",
      review: "חוויית משתמש מצוינת, הייתי משלמת על זה בשמחה.",
    },
    en: {
      name: "Lauren Evans",
      review: "Fantastic user experience. Simply amazing!",
    },
  },
  {
    he: {
      name: "נתן הורוביץ",
      review: "פתרון מושלם לבעיה שהייתה לי שנים, היה שווה לי לשלם עליו!",
    },
    en: {
      name: "Kevin Mitchell",
      review: "Perfect solution to my long-term problem.",
    },
  },
  {
    he: {
      name: "תמר פלדמן",
      review: "איכות ברמה גבוהה, הופתעתי שזה בחינם. אשלם על זה בשמחה בעתיד.",
    },
    en: {
      name: "Nicole Harris",
      review: "Top quality service. Incredibly helpful!",
    },
  },
  {
    he: {
      name: "אליהו שטיין",
      review: "שירות לקוחות אדיב ומקצועי. הייתי משלם על שירות כזה!",
    },
    en: {
      name: "Brian Thompson",
      review: "Professional and friendly customer service.",
    },
  },
  {
    he: {
      name: "דינה גרינברג",
      review: "מעל ומעבר למה שציפיתי. הייתי משלמת הרבה על שירות כזה.",
    },
    en: {
      name: "Sarah Anderson",
      review: "Far exceeded my expectations. Brilliant!",
    },
  },
  {
    he: {
      name: "שמואל זילברמן",
      review: "קיבלתי בחינם, אבל בהחלט הייתי משלם על שירות באיכות כזו.",
    },
    en: {
      name: "William Davis",
      review: "Incredible quality service. Highly recommend!",
    },
  },
];

  const getMultipleReviewSets = (numSets: number = 5) => {
    const reviewSets = [];

    for (let i = 0; i < numSets; i++) {
      const shuffled = [...reviews].sort(() => 0.5 - Math.random());
      const selectedReviews = shuffled.slice(0, 3);

      // Get the current language reviews
      const localizedReviews = selectedReviews.map(
        (review) => review[language]
      );

      reviewSets.push(localizedReviews);
    }
    return reviewSets;
  };

  const [reviewSets, setReviewSets] = useState<Review[][]>([]);

  // Update reviews when language changes
  useEffect(() => {
    const sets = getMultipleReviewSets();
    setReviewSets(sets);
    setRandomReviews(sets[currentReviewSet]);
  }, [language]);

  useEffect(() => {
    // Create multiple sets of reviews for the carousel
    const sets = getMultipleReviewSets();
    setReviewSets(sets);

    // Initial set of random reviews
    setRandomReviews(sets[0]);

    // Set initial visibility state to false
    setIsVisible(false);

    // Set up Intersection Observer for fade-in effect
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When component is visible, set isVisible to true after a small delay
          setTimeout(() => {
            setIsVisible(true);
          }, 50);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const currentDir = document.documentElement.dir;
    setLanguage(currentDir === "rtl" ? "he" : "en");
  }, []);

  // Listen for document direction changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentDir = document.documentElement.dir;
      setLanguage(currentDir === "rtl" ? "he" : "en");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    return () => observer.disconnect();
  }, []);

  // Set up the review carousel effect when in preview mode
  useEffect(() => {
    if (!preview || reviewSets.length === 0) return;

    let fadeOutTimer: NodeJS.Timeout;
    let changeContentTimer: NodeJS.Timeout;
    let fadeInTimer: NodeJS.Timeout;
    let cycleTimer: NodeJS.Timeout;

    const runCarousel = () => {
      // Fade out

      // Change content after fade out completes
      changeContentTimer = setTimeout(() => {
        const nextSetIndex = (currentReviewSet + 1) % reviewSets.length;
        setCurrentReviewSet(nextSetIndex);
        setRandomReviews(reviewSets[nextSetIndex]);

        // Fade in
        fadeInTimer = setTimeout(() => {}, 50);
      }, 1000);

      // Schedule next cycle
      cycleTimer = setTimeout(runCarousel, 2000);
    };

    // Start first cycle
    fadeOutTimer = setTimeout(runCarousel, 2000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(changeContentTimer);
      clearTimeout(fadeInTimer);
      clearTimeout(cycleTimer);
    };
  }, [preview, reviewSets, currentReviewSet]);
  if (!preview)
    return (
      <div
        ref={componentRef}
        className={`${className} p-3 mx-3 my-5 lg:my-0 h-[50vh] w-auto lg:w-[80vw] text-black shadow-2xl lg:h-[23vh] bg-white rounded-xl lg:flex`}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1.5s ease-in-out",
        }}
      >
        <div className="flex flex-row flex-1 h-[50%] items-center lg:h-full lg:flex-[2] lg:p-5 lg:gap-x-8">
          {/**pic, title, job, clients rate (x/10) */}
          <div className="flex-1 lg:flex-[1] lg:justify-center lg:items-center lg:mt-auto lg:mb-auto">
            <img
              src={imageSrc}
              alt={
                language === "he"
                  ? "תמונה של משתמש לדוגמה"
                  : "Example user image"
              }
              className="w-[110%] rounded-full lg:w-[10%] aspect-square lg:min-w-[100px]"
            />
          </div>
          <div className="text-start flex flex-[1.3] mt-2 mx-3 lg:mx-0 lg:mt-0 flex-col lg:flex-[3] lg:bg-white lg:justify-around lg:text-right">
            <span className="font-secular text-3xl lg:text-3xl text-start">
              {name}
            </span>
            <div className="flex flex-col text-start mt-2 lg:mt-0">
              <span className="font-secular text-[20px] lg:text-md">
                {jobTitle}
              </span>
              <span className="font-secular lg:text-md">
                {language === "he"
                  ? `דירוג לקוחות: ${randomFloat(8.5, 10)}/10`
                  : `Client rating: ${randomFloat(8.5, 10)}/10`}
              </span>
            </div>
          </div>
        </div>
        {/**spacer- only shown on pc */}
        <div className="lg:border lg:h-[80%] lg:w-[1px] lg:mt-auto lg:mb-auto" />
        <div className="lg:flex lg:h-full lg:flex-[4] lg:bg-aber-700 lg:p-5">
          <div className="flex flex-1 flex-col space-y-3 lg:space-y-4">
            {randomReviews.map((review, index) => (
              <div
                key={index}
                className="flex h-[25%] items-center bg-[#eee] lg:bg-gray-50 lg:p-4 rounded-lg lg:shadow"
              >
                <div
                  className={`flex-1 lg:flex-row lg:flex ${
                    language === "he" ? "lg:text-right" : "lg:text-left"
                  } font-secular justify-between lg:px-`}
                >
                  <span className="ml-2 font-bold lg:font-normal">
                    {review.name}:
                  </span>
                  <span className="">{review.review}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  else
    return (
      <div
        ref={componentRef}
        className={`${className} p-3 mx-3 my-5 h-[50vh] w-auto lg:w-[80vw] shadow-2xl lg:h-[23vh] bg-white rounded-xl lg:flex`}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1.5s ease-in-out",
          direction: language === "he" ? "rtl" : "ltr",
        }}
      >
        <div className="flex flex-row flex-1 h-[50%] items-center lg:h-full lg:flex-[2] lg:p-5 lg:gap-x-8">
          <div className="flex-1 lg:flex-[1] lg:justify-center lg:items-center lg:mt-auto lg:mb-auto">
            <img
              src={imageSrc}
              alt={
                language === "he"
                  ? "תמונה של משתמש לדוגמה"
                  : "Sample user image"
              }
              className="w-[110%] rounded-full lg:w-[10%] aspect-square lg:min-w-[100px]"
            />
          </div>
          <div className="flex flex-[1.3] mt-2 mx-3 lg:mx-0 lg:mt-0 flex-col lg:flex-[3] lg:bg-white lg:justify-around lg:text-right">
            <span className="font-secular text-3xl lg:text-3xl text-start">{name}</span>
            <div className="flex flex-col text-right mt-2 lg:mt-0">
              <div className="min-h-full bg-gray-300 h-full w-1/2 rounded animate-pulse" />
              <span className="flex flex-1 flex-row font-secular lg:text-md">
                {language === "he" ? "דירוג לקוחות:" : "Customer Rating:"}
                <span className="w-[25%]">
                  <div className="bg-gray-300 h-full w-full mx-2 rounded animate-pulse"></div>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="lg:border lg:h-[80%] lg:w-[1px] lg:mt-auto lg:mb-auto" />
        <div className="lg:flex lg:h-full lg:flex-[4] lg:bg-aber-700 lg:p-5">
          <div className="flex flex-1 flex-col space-y-3 lg:space-y-4">
            {randomReviews.map((review, index) => (
              <div
                key={index}
                className="flex h-[25%] items-center bg-[#eee] lg:bg-gray-50 lg:p-4 rounded-lg lg:shadow"
              >
                <div
                  className={`flex-1 lg:flex-row lg:flex ${
                    language === "he" ? "lg:text-right" : "lg:text-left"
                  } font-secular justify-between lg:px-0`}
                >
                  <span className="ml-2 font-bold lg:font-normal">
                    {review.name}:
                  </span>
                  <span>{review.review}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default UserExample;
