"use client";

import styles from "@/app/components/Faq/Faq.module.css";

export default function Faq() {
  function toggleAccordion(event) {
    const summary = event.currentTarget;
    summary.classList.toggle(styles.summaryOpen);
  }

  return (
    <section className={`${styles.section} grid-component`}>
      <div className={styles.layout}>
        <div className={styles.text}>
          <h2>Frequently Asked Questions</h2>
          <p>
            Didn't find what you were looking for? Reach out to us and we will
            be glad to help!
          </p>
        </div>
        <div className={styles.accordion}>
          <details>
            <summary
              onClick={(event) => toggleAccordion(event)}
              className={styles.summary}
            >
              <div className={styles.accordionHeader}>
                <p>Why should I join Game Audio Denmark?</p>
                <div className={styles.customIcon}>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 930 764"
                  >
                    <path
                      strokeWidth="0px"
                      d="m382,50c44.84,0,88.32,8.77,129.21,26.07,39.53,16.72,75.04,40.66,105.55,71.17,30.51,30.51,54.45,66.02,71.17,105.55,17.3,40.9,26.07,84.37,26.07,129.21s-8.77,88.32-26.07,129.21c-16.72,39.53-40.66,75.04-71.17,105.55-30.51,30.51-66.02,54.45-105.55,71.17-40.9,17.3-84.37,26.07-129.21,26.07s-88.32-8.77-129.21-26.07c-39.53-16.72-75.04-40.66-105.55-71.17-30.51-30.51-54.45-66.02-71.17-105.55-17.3-40.9-26.07-84.37-26.07-129.21s8.77-88.32,26.07-129.21c16.72-39.53,40.66-75.04,71.17-105.55,30.51-30.51,66.02-54.45,105.55-71.17,40.9-17.3,84.37-26.07,129.21-26.07m0-50C171.03,0,0,171.03,0,382s171.03,382,382,382,382-171.03,382-382S592.97,0,382,0h0Z"
                    />
                    <path
                      strokeWidth="0px"
                      d="m687,181c13.74,18.2,30.84,44.91,44,80,14.84,39.56,19.02,74.73,20,99,59.67-55.33,119.33-110.67,179-166-81-4.33-162-8.67-243-13Z"
                    />
                  </svg>
                </div>
              </div>
            </summary>
            <p className={styles.p}>
              By becoming a member of Game Audio Denmark, you unlock a multitude
              of opportunities to grow and thrive in the game audio industry.
              Enjoy access to a vibrant community of professionals, participate
              in events and workshops both online and offline, and gain
              exclusive insights from industry experts.
            </p>
          </details>
          <details>
            <summary
              onClick={(event) => toggleAccordion(event)}
              className={styles.summary}
            >
              <div className={styles.accordionHeader}>
                <p>
                  What activities and events does Game Audio Denmark organize?
                </p>
                <div className={styles.customIcon}>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 930 764"
                  >
                    <path
                      strokeWidth="0px"
                      d="m382,50c44.84,0,88.32,8.77,129.21,26.07,39.53,16.72,75.04,40.66,105.55,71.17,30.51,30.51,54.45,66.02,71.17,105.55,17.3,40.9,26.07,84.37,26.07,129.21s-8.77,88.32-26.07,129.21c-16.72,39.53-40.66,75.04-71.17,105.55-30.51,30.51-66.02,54.45-105.55,71.17-40.9,17.3-84.37,26.07-129.21,26.07s-88.32-8.77-129.21-26.07c-39.53-16.72-75.04-40.66-105.55-71.17-30.51-30.51-54.45-66.02-71.17-105.55-17.3-40.9-26.07-84.37-26.07-129.21s8.77-88.32,26.07-129.21c16.72-39.53,40.66-75.04,71.17-105.55,30.51-30.51,66.02-54.45,105.55-71.17,40.9-17.3,84.37-26.07,129.21-26.07m0-50C171.03,0,0,171.03,0,382s171.03,382,382,382,382-171.03,382-382S592.97,0,382,0h0Z"
                    />
                    <path
                      strokeWidth="0px"
                      d="m687,181c13.74,18.2,30.84,44.91,44,80,14.84,39.56,19.02,74.73,20,99,59.67-55.33,119.33-110.67,179-166-81-4.33-162-8.67-243-13Z"
                    />
                  </svg>
                </div>
              </div>
            </summary>
            <p className={styles.p}>
              Game Audio Denmark is committed to providing a rich calendar of
              events and activities for its members. The association hosts
              hands-on workshops, specialized game audio topic sessions,
              webinars featuring international experts, and even plans to launch
              a mentorship program.
            </p>
          </details>
          <details>
            <summary
              onClick={(event) => toggleAccordion(event)}
              className={styles.summary}
            >
              <div className={styles.accordionHeader}>
                <p>How does Game Audio Denmark support its members?</p>
                <div className={styles.customIcon}>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 930 764"
                  >
                    <path
                      strokeWidth="0px"
                      d="m382,50c44.84,0,88.32,8.77,129.21,26.07,39.53,16.72,75.04,40.66,105.55,71.17,30.51,30.51,54.45,66.02,71.17,105.55,17.3,40.9,26.07,84.37,26.07,129.21s-8.77,88.32-26.07,129.21c-16.72,39.53-40.66,75.04-71.17,105.55-30.51,30.51-66.02,54.45-105.55,71.17-40.9,17.3-84.37,26.07-129.21,26.07s-88.32-8.77-129.21-26.07c-39.53-16.72-75.04-40.66-105.55-71.17-30.51-30.51-54.45-66.02-71.17-105.55-17.3-40.9-26.07-84.37-26.07-129.21s8.77-88.32,26.07-129.21c16.72-39.53,40.66-75.04,71.17-105.55,30.51-30.51,66.02-54.45,105.55-71.17,40.9-17.3,84.37-26.07,129.21-26.07m0-50C171.03,0,0,171.03,0,382s171.03,382,382,382,382-171.03,382-382S592.97,0,382,0h0Z"
                    />
                    <path
                      strokeWidth="0px"
                      d="m687,181c13.74,18.2,30.84,44.91,44,80,14.84,39.56,19.02,74.73,20,99,59.67-55.33,119.33-110.67,179-166-81-4.33-162-8.67-243-13Z"
                    />
                  </svg>
                </div>
              </div>
            </summary>
            <p className={styles.p}>
              Game Audio Denmark is not just about the present; it's also about
              building a sustainable and supportive future for its members.
              Beyond the first year, the association plans to explore
              initiatives like a job board, networking platforms, sound design
              challenges, and crowdsourced field recording projects.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
