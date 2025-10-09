export default function Hero({ globalData }) {
  return (
    <div className="max-w-4xl w-full">
      <div className="p-4 mobile:p-6 tablet:p-8 mt-8 mobile:mt-12 tablet:mt-16">
        <h1 className="text-6xl mobile:text-7xl tablet:text-8xl lg:text-9xl xl:text-[100px] leading-tight animate-hero-header">
          {globalData.name}
        </h1>
        <p
          className="text-lg mobile:text-xl tablet:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-light animate-hero-subheader mt-4 mobile:mt-6"
          style={{
            fontFamily: 'roc-grotesk, sans-serif',
          }}
        >
          {globalData.blogTitle}
        </p>
      </div>
      <div className="mt-8 mobile:mt-12 tablet:mt-16 max-w-full mobile:max-w-lg">
        <p className="text-sm mobile:text-base tablet:text-lg text-gray-600 dark:text-gray-400 p-4 mobile:p-6 tablet:p-8 leading-relaxed">
          Focused on innovating user experiences and driving measurable
          growth.
        </p>
        <p className="text-sm mobile:text-base tablet:text-lg text-gray-600 dark:text-gray-400 p-4 mobile:p-6 tablet:p-8 leading-relaxed">
          Currently working as a Digital Marketing Operations Manager at{' '}
          <a
            href="https://mammotome.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          >
            Mammotome.
          </a>
        </p>
      </div>
    </div>
  );
}
