export default function Hero({ globalData }) {
  return (

        <div className="max-w-4xl">
          <div className="p-4">
            <h1
              className="text-4xl mobile:text-5xl tablet:text-6xl laptop:text-7xl font-light text-gray-900 dark:text-gray-100 tracking-tight animate-hero-header"
              style={{ fontFamily: 'moret, serif' }}
            >
              {globalData.name}
            </h1>
            <p
              className="text-xl mobile:text-2xl tablet:text-3xl text-gray-600 dark:text-gray-400 font-light animate-hero-subheader"
              style={{
                fontFamily: 'roc-grotesk, sans-serif',
              }}
            >
              {globalData.blogTitle}
            </p>
          </div>
             <div className="bottom-4 mobile:bottom-6 tablet:bottom-8 right-4 mobile:right-6 tablet:right-8 z-10 max-w-xs mobile:max-w-sm mr-2 mobile:mr-3 tablet:mr-5">
           
            <p className="text-sm p-4">
              Focused on innovating user experiences and driving measurable
              growth.
            </p>
            <p className="text-sm p-4">
              Currently working as a Digital Marketing Operations Manager at{' '}
              <a
                href="https://mammotome.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mammotome.
              </a>
            </p>
          </div>
    </div>
  );
}
