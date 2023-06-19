import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./frontpage.css"; // Import the CSS file

const Frontpage = () => {
  useEffect(() => {
    const handleScroll = (sectionClass) => {
      const section = document.querySelector(sectionClass);
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    };

    const aboutLink = document.querySelector(".about-link");
    aboutLink.addEventListener("click", () => handleScroll(".section-about"));

    const servicesLink = document.querySelector(".services-link");
    servicesLink.addEventListener("click", () =>
      handleScroll(".section-services")
    );

    return () => {
      aboutLink.removeEventListener("click", () =>
        handleScroll(".section-about")
      );
      servicesLink.removeEventListener("click", () =>
        handleScroll(".section-services")
      );
    };
  }, []);

  return (
    <>
    <div className="background-container"></div>
    <div className="frontpage-container">
      <header>
        <h1 className="frontpage-heading">SyncBridge</h1>

        <nav className="frontpage-nav">
          <ul>
            <li>
              <a className="about-link" href="#">
                <h4>About</h4>
              </a>
            </li>

            <li>
              <a a className="services-link" href="#">
                <h4>Services</h4>
              </a>
            </li>
            <li>
              <Link to="/signup">
                <h4>Sign Up</h4>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <h4>Login</h4>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="section-about">
        <div className="section-background">
        <h2>About Us</h2>
        <p>
          Introducing SyncBridge - Seamless Data Synchronization Across
          Operating Systems SyncBridge is a cutting-edge data synchronization
          solution designed to seamlessly connect and synchronize your data
          across different operating systems. Whether you're using Windows,
          macOS, Linux, or a combination of these platforms, SyncBridge ensures
          that your data remains synchronized and readily accessible.
        </p>
        <p>
          With SyncBridge, you can effortlessly sync files, documents, photos,
          and more, eliminating the need for manual transfers or complicated
          workarounds. Our advanced synchronization technology intelligently
          detects changes and updates, automatically propagating them across all
          your connected devices and operating systems. Stay organized and
          productive without the hassle of managing multiple versions or dealing
          with compatibility issues.
        </p>
        <p>
          SyncBridge supports a wide range of operating systems, including
          Windows, macOS, Linux distributions, and even mobile platforms like
          iOS and Android. It acts as a bridge between these systems, enabling
          seamless data synchronization regardless of the devices you use.
          Whether you're working on a desktop computer, laptop, smartphone, or
          tablet, SyncBridge keeps your data in perfect harmony.
        </p>
        <p>
          In addition to file synchronization, SyncBridge extends its
          capabilities to other types of data. Keep your calendars, contacts,
          and bookmarks in sync across all your devices, ensuring that you have
          the latest information at your fingertips. Collaborate effortlessly
          with team members by synchronizing project data, tasks, and updates in
          real-time. SyncBridge breaks down barriers between operating systems,
          enabling smooth collaboration and communication.
        </p>
        <p>
          SyncBridge prioritizes data security and privacy. We employ
          state-of-the-art encryption protocols to ensure that your data is
          protected during transit and storage. Your sensitive information
          remains confidential and secure throughout the synchronization
          process, giving you peace of mind.
        </p>
        <p>
          Experience the power and convenience of SyncBridge, the ultimate data
          synchronization solution for multi-platform environments. Say goodbye
          to compatibility issues, manual transfers, and data inconsistencies.
          SyncBridge empowers you to work seamlessly across different operating
          systems, maximizing your productivity and efficiency. Try SyncBridge
          today and unlock the true potential of effortless data synchronization
          across platforms.
        </p>
        </div>
      </section>

      <section className="section-services">
        <h2>Our Services</h2>

        <ul>
          <li>Effortless Data Synchronization</li>
          <p>
            SyncBridge enables seamless and effortless synchronization of your
            data across different operating systems. Say goodbye to manual
            transfers and tedious workarounds. With SyncBridge, your files,
            documents, and other data remain in perfect harmony across all your
            devices.
          </p>
          <li>Multi-Platform Support</li>
          <p>
            SyncBridge supports a wide range of operating systems, including
            Windows, macOS, Linux, iOS, and Android. No matter what devices or
            platforms you use, SyncBridge bridges the gap and ensures your data
            is synchronized and accessible across them all.
          </p>
          <li>Real-Time Updates</li>
          <p>
            Experience real-time updates with SyncBridge. Any changes or updates
            you make to your files, documents, or other data are instantly
            synchronized across all your connected devices. Stay up-to-date and
            work collaboratively with ease.
          </p>
          <li>Secure and Private</li>
          <p>
            Data security and privacy are our top priorities. SyncBridge
            utilizes advanced encryption protocols to protect your data during
            transit and storage. Rest assured that your sensitive information
            remains confidential and secure throughout the synchronization
            process.
          </p>
          <li>Collaboration Made Easy</li>
          <p>
            SyncBridge facilitates seamless collaboration by synchronizing
            project data, tasks, and updates in real-time. Work together with
            your team members, no matter which operating systems they use. Break
            down barriers and enhance productivity with effortless
            collaboration.
          </p>
          <li>Versatile Data Types</li>
          <p>
            SyncBridge goes beyond file synchronization. Keep your calendars,
            contacts, bookmarks, and more in sync across all your devices.
            Access your important information whenever and wherever you need it.
          </p>
          <li>User-Friendly Interface</li>
          <p>
            SyncBridge features a user-friendly interface that makes data
            synchronization a breeze. Our intuitive design ensures a seamless
            user experience, allowing you to effortlessly manage and control
            your synchronized data.
          </p>
          <li>24/7 Support</li>
          <p>
            We're here for you whenever you need assistance. Our dedicated
            support team is available 24/7 to address any questions or concerns
            you may have. We strive to provide exceptional customer service and
            ensure your experience with SyncBridge is smooth and hassle-free.
          </p>
          <li>Experience the Power of SyncBridge</li>
          <p>
            Discover the power and convenience of SyncBridge and unlock the true
            potential of data synchronization across operating systems. Say
            goodbye to data inconsistencies and compatibility issues. Try
            SyncBridge today and experience effortless data synchronization like
            never before.
          </p>
        </ul>
      </section>

      <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default Frontpage;
