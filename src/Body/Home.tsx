import { Link } from "react-router-dom";
import { HomeHeader } from "../Header/HomeHeader";
import { Footer } from "../Footer/Footer";
import { Button } from "@mui/material";
import { Code, Work } from "@mui/icons-material";
import { COLOR } from "../Color.palette";

export const HomePage = () => {
  return (
    <>
      <HomeHeader />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-12 bg-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Crack Your Next Tech Interview with Confidence
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Master Data Structures, Algorithms, and System Design with top-tier courses & mock interviews.
        </p>
        <Button
          variant="contained"
          sx={{ mt: 3, px: 4, py: 1.5, fontSize: "1.1rem", backgroundColor: COLOR.Primary }}
          component={Link}
          to="/get-started"
        >
          Get Started
        </Button>
      </section>

      {/* Course Section */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* DSA Course */}
          <div className="p-6 border rounded-md shadow-md flex items-center gap-4">
            <Code fontSize="large" className="text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold">Data Structures & Algorithms</h3>
              <p className="text-gray-600 mt-1">Learn the core concepts of DSA to ace coding rounds.</p>
              <Link
                to="/dsa-course"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Explore Course
              </Link>
            </div>
          </div>

          {/* Interview Prep */}
          <div className="p-6 border rounded-md shadow-md flex items-center gap-4">
            <Work fontSize="large" className="text-green-600" />
            <div>
              <h3 className="text-xl font-semibold">Interview Preparation</h3>
              <p className="text-gray-600 mt-1">Get ready with mock interviews and top company questions.</p>
              <Link
                to="/interview-prep"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Start Preparing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

