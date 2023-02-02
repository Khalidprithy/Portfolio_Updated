import React from 'react';
import profileImg from '../../../images/profile.jpg'

const WorkOutBlog = () => {
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
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-gray-100">The Benefits of Regular Exercise: Why Working Out is Essential for Your Health and Happiness</h1>
                        </header>
                        <div className='shadow-sm rounded-lg p-2 mb-4 border hover:border-neutral dark:border-gray-600 dark:hover:border-gray-200'>
                            <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                Exercise is a crucial aspect of a healthy lifestyle, providing numerous physical and mental benefits. Whether you prefer to hit the gym, go for a run, or try a new fitness class, working out regularly can help improve your quality of life. In this blog, we will explore the top 10 benefits of regular exercise and how it can positively impact your health and happiness.
                            </p>
                            <ul class="list-disc ml-4 text-gray-600 dark:text-gray-300">
                                <li><span className='font-medium'>Improved Physical Health</span>Exercise helps improve cardiovascular health, strengthens bones, and boosts immune function. Regular physical activity can also reduce the risk of chronic diseases such as heart disease, stroke, and type 2 diabetes.</li>

                                <li><span className='font-medium'>Better Mental Health</span> Working out has a positive impact on mental health, reducing symptoms of depression, anxiety, and stress. Exercise releases endorphins, the body's feel-good hormones, which can boost mood and reduce feelings of stress and anxiety.</li>

                                <li><span className='font-medium'>Increased Energy Levels</span>Exercise increases blood flow and oxygen levels, providing you with more energy throughout the day. This can lead to improved productivity and a more positive outlook on life.</li>

                                <li><span className='font-medium'>Better Sleep</span>Working out regularly can help improve sleep quality and duration. Physical activity helps regulate your circadian rhythm and promotes deep, restful sleep, leaving you feeling refreshed and energized in the morning.</li>

                                <li><span className='font-medium'>Weight Management</span>Exercise is an essential component of a weight management plan. Regular physical activity, combined with a balanced diet, can help you maintain a healthy weight and prevent weight gain.</li>

                                <li><span className='font-medium'>Stronger Bones and Muscles</span>Regular exercise helps build and maintain strong bones and muscles. Weight-bearing activities, such as running and weightlifting, can help improve bone density and reduce the risk of osteoporosis.</li>

                                <li><span className='font-medium'>Improved Flexibility and Balance</span>Physical activity can help improve flexibility and balance, reducing the risk of injury and falls. Regular exercise can also help increase range of motion and reduce stiffness in joints.</li>

                                <li><span className='font-medium'>Better Cognitive Function</span>Working out has been shown to improve cognitive function, including memory and attention. Exercise can also help delay the onset of age-related cognitive decline.</li>

                                <li><span className='font-medium'>Boosted Self-Confidence</span>Exercise can improve body image and boost self-confidence. Regular physical activity can help you feel better about your appearance, leading to improved self-esteem and a more positive outlook on life.</li>

                                <li><span className='font-medium'>Stronger Bones and Muscles</span>Regular exercise helps build and maintain strong bones and muscles. Weight-bearing activities, such as running and weightlifting, can help improve bone density and reduce the risk of osteoporosis.</li>

                                <li><span className='font-medium'>Increased Happiness</span>Exercise is a natural mood booster, releasing endorphins and reducing symptoms of depression, anxiety, and stress. Regular physical activity can help improve overall well-being and lead to increased happiness.</li>

                            </ul>
                            <p className='text-gray-600 dark:text-gray-300 mb-2'>
                                In conclusion, working out regularly provides numerous physical and mental benefits. Whether you prefer to hit the gym, go for a run, or try a new fitness class, making exercise a part of your daily routine can help improve your health and happiness. So, why not make a commitment to regular exercise and see the positive impact it can have on your life!
                            </p>
                        </div>
                    </article>
                </div>
            </main>
        </div>
    );
};

export default WorkOutBlog;