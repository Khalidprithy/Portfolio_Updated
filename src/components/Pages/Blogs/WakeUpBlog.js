import React from 'react';
import profileImg from '../../../images/profile.jpg'

const WakeUpBlog = () => {
    return (
        <div className='p-2 w-full md:w-8/12 mx-auto rounded-lg border'>
            <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 rounded-lg">
                <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article class="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header class="mb-4 lg:mb-6 not-format">
                            <address class="flex items-center mb-6 not-italic">
                                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img class="mr-4 w-16 h-16 rounded-full" src={profileImg} alt="Khalid" />
                                    <div>
                                        <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Khalid Bin Alam</a>
                                        <p class="text-base font-light text-gray-500 dark:text-gray-300">MERN Stack Developer</p>
                                        <p class="text-base font-light text-gray-500 dark:text-gray-300"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Jan. 22, 2022</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-gray-100">Waking up Early: The Ultimate Key to Success</h1>
                        </header>
                        <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                            <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                Starting your day early can have a significant impact on your overall well-being and success. In fact, waking up early is considered one of the best habits you can cultivate to lead a happier and more productive life. In this blog, we will explore the various benefits of waking up early and how you can make the most of your mornings.
                            </p>
                            <ul class="list-disc ml-4 text-gray-600 dark:text-gray-300">
                                <li><span className='font-medium'>Increased Productivity</span> One of the biggest benefits of waking up early is increased productivity. The early morning hours are quiet and peaceful, allowing you to focus on your work without distractions. With a clear mind, you can get a head start on your day and tackle important tasks before the hustle and bustle of daily life begins. Additionally, research has shown that our brains are most alert and focused in the morning, leading to higher levels of productivity.</li>

                                <li><span className='font-medium'>Improved Physical and Mental Health</span> Waking up early has a positive impact on your physical and mental health. The earlier you rise, the more time you have to engage in physical activity, eat a nutritious breakfast, and practice self-care routines. This can lead to improved energy levels, increased focus, and a more positive outlook on life. Additionally, waking up at a consistent time each day helps regulate your circadian rhythm and improves sleep quality, leading to better overall health.</li>

                                <li><span className='font-medium'>Better Time Management</span>Waking up early provides you with more time in the day to get things done. Instead of rushing to finish tasks before the day ends, you can prioritize and manage your time more effectively. This can lead to decreased stress and a sense of control over your day. Additionally, waking up early provides you with more opportunities to pursue hobbies, spend time with loved ones, and engage in self-care activities.</li>

                                <li><span className='font-medium'>Improved Creativity and Problem-Solving Skills</span>The early morning hours can also be a time for quiet reflection and creative thinking. This is the perfect time to brainstorm ideas, tackle complex problems, and come up with innovative solutions. With a clear mind, you can think more creatively and find new perspectives on challenging tasks.</li>

                            </ul>
                            <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                In conclusion, waking up early is a simple yet powerful habit that can have a significant impact on your life. By making the most of your mornings, you can improve your productivity, health, and overall well-being. So, why not try setting your alarm a little earlier and see the positive effects it can have on your life!
                            </p>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default WakeUpBlog;