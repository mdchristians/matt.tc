export const logPageView = (url) => {
  try {
    window.gtag('config', process.env.GA_TRACKING_ID, {
      page_location: url,
      page_title: document.title,
    });
  } catch (err) {
    console.error('GA Failure', err);
  }
};

export const logEvent = (options) => {
  const { action, category, label, value } = options;

  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  } catch (err) {
    console.error('GA Failure', err);
  }
};
