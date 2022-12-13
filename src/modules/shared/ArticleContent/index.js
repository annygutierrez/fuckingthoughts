import AwkwardPhoto from '../images/pngs/awkward.png';
import RusiaPhoto from '../images/pngs/rusia.png';
import KisKisPhoto from '../images/pngs/kiskis.png';
import HighPhoto from '../images/pngs/highonmusic.png';
import MonologPhoto from '../images/pngs/monolog.png';
import ThisYearPhoto from '../images/pngs/22.png';
import './styles.css';

export const articleContent = {
    0: {
        title: 'RAZIIIIYA!!!',
        subtitle: 'First take - 9 nov 2022',
        resume: 'How little things get you into big things.',
        article: [
            <p>When I was a little girl, I was afraid of everything, literally. I was afraid of my own shadow and the twilight (not the movie, the real one hahaha), so I know my little me would be surprised and terrified if I told her about my language interests, because, yeah . . . I was afraid of how Russian people sound in movies.</p>,
            <p>Learning a new language is an adventure, you have to be willing to get into a new world of possibilities and problems. Learning English was easy in some ways, it really is everywhere now, and it’s very difficult to escape from it. </p>,
            <p>When I got into Russian, it was a very random decision, I didn’t plan to learn it, but I had a little unconscious story with it since 2018, when I found the song that would change my life forever <strong><i>(too dramatic hahaha)</i></strong> when stalking a collegue <strong><i>(Molchat Doma - Судно)</i></strong>, then youtube conspired (spied on me) and showed me a new song, then I met a Russian girl, then more music came into the picture, found out a German rapper I follow was actually Russian, discovered Poshlaya Molly, spotify made me listen to КИС-КИС, and finally . . . the Ukranian war.</p>,
            <p>All these events pushed me to learn Russian. I really got curious about that big chunk of the world full of countries that nobody likes to talk about, and to my surprised, it was totally  worth it.</p>,
            <p><strong>“Don’t underestimate <i>the little things</i>, they can trigger big changes in your life.”</strong></p>,
            <p style={{ fontSize: '12px', margin: '0', marginTop: '-2em', color: '#900000' }}><i> It does really feel like getting into that Russian course was a reset.</i></p>,
            <p style={{ fontSize: '12px', margin: '0', marginTop: '-3em', color: '#900000' }}><i> So, there you have it, if you want a life reset, try learning a new language.</i></p>
        ],
        photo: RusiaPhoto
    },
    1: {
        title: 'Embracing an obsession',
        subtitle: 'First take - 9 nov 2022',
        resume: 'Found a thing to be obsessed about for the next 10 months',
        article: [
            <p>I’m a person that has a very strong obsessive compultion, which has led me to limit the things I let myself be obsessed about.</p>,
            <p>The first time I did let myself fall hard into an obsession was in 2016, I had so much free time that I decided it didn’t mattered, luckily I found out that when I’m in the middle of my obsession, my brain doesn’t feel how tired I’m of hearing someone talking in a language I don’t understand, that’s how I learned how to watch movies in English without subtitles, it felt like my head was cut open and things just started to make sense.</p>,
            <p>I heard about <strong style={{ fontSize: '18px' }}>кис-кис</strong> almost a year ago, I was looking for new music on spotify when I stumbled into one of their tracks, it was amazing, in a weird way, I was not used to the sound they had, the combination was interesting, some kind of electronic sound, plus 2007 emo nostalgia. Months later, after getting into a Russian course, I was looking for a new interest, and rediscovered them by watching their music videos.</p>,
            <p>Whoever had the idea of the artistic concept of this band is a genius. The sound, the designs, the band name, the outfits, the way they approach concerts, the TaTu style of the interactions of the female bandmates, the subtle gopnik style, the music video shots, the colorization, the edition . . . just perfection.</p>,
            <p>Sorry, I got carried away 😂, anyways, you get it, now I have hundreds of articles to read  and thousands of videos to watch and I’m not even mad. </p>,
            <p style={{ fontSize: '16px', color: '#900000' }}><strong>“Алина трахни меня”</strong></p>,
            <p style={{ fontSize: '13px', color: '#000000', maring: '0', marginTop: '-3.5em' }}><i>- Definitely someone at a КИС-КИС concert</i></p>,
            <p style={{ color: '#B09E9E' }}>When I was a kid, <a href='https://www.facebook.com/comunaarea7' target="_blank" style={{ color: '#6A3A3A', fontWeight: '600' }}>Area 7</a> used to do practice sessions on the garage of  the building where I lived, I'm gonna give them the credit for my love for <a href='https://www.facebook.com/kiskisnotdead' target="_blank" style={{ color: '#6A3A3A', fontWeight: '600' }}>кис-кис</a>.</p>,
            <p style={{ color: '#B09E9E' }}>This video unlocked a childhood memory I didn’t know I had.</p>,
            <video className='RapperVideo' controls="controls">
            <source src={require('./rapper.mp4')} type="video/mp4"/>
            Your browser does not support the video functionality.
        </video>
        ],
        photo: KisKisPhoto
    },
    // 2: {
    //     title: 'Pandemic Reset',
    //     subtitle: 'First take - 28 nov 2022',
    //     resume: 'A very personal existential crisis brought to you, triggered by too many German classes 😂',
    //     article: [
    //         <p>After more than two years since the pandemic started, I still can’t believe it happened, honestly, it feels like it never did, it feels like the world that existed before was from another universe, a dream, and now I’m living in a totally different earth, universe, and state of mind.</p>,
    //         <p>The pandemic gave us a lot of time to think about what we really wanted, at least that’s how it was for me. Before the <strong>covid apocalypse</strong> happened, I was on a <strong>‘let’s hustle until I can no longer breath’</strong> state of mind, I wanted to go to the US to finish my studies, wanted to work for a big company like Google, build my own business, while living in New york or some shit, I had an entire plan prepared, a list of tasks I was suppoused to accomplish in order to do everything I wanted.</p>,
    //         <p>Two years later, I accomplished everything I was suppoused to accomplish, but I no longer want to go to the USA to have the life of a hustler.</p>,
    //         <p style={{ color: '#B09E9E' }}><i>As someone who has been working its ass since being a 16 years old without breaks, while being hated by people who were suppouse to be a support system, while being in charge of the adults and kids (I’m still in charge by the way), I finally got to the point where I feel I lost part of my life, while other teens were making friends, socializing, going to university or to the institute, I was trapped, having to be an adult for everyone around me.</i></p>,
    //         <p style={{ color: '#B09E9E' }}><i>Also, after working for almost 5 years on IT and seeing  high rank people from almost every peruvian company, I got to the conclussion that, at the end of the day, everyone wants and needs to earn money on their sleep to live a proper life these days, especially if you don’t even have your parents’ house to recover from your failures, or anyone’s house.</i></p>,
    //         <p style={{ color: '#B09E9E' }}><i>I want to have freedom to fail and to dream again, to try things just because, to go live anywhere, try to live a life, fail, and try again, I’m tired of the ‘all or nothing’ bets I’ve been doing since a teenager.</i></p>,
    //         <p style={{ color: '#B09E9E' }}><i>I want freedom. Freedom to be stupid and inmature, because I am, but I can’t be. Everything due to the fact that I didn’t even had time to mature. </i></p>,
    //         <p style={{ color: '#B09E9E' }}><i>I see a lot of people my age are settleling down, but my mind is still not there, I’ve been forced to be there, now I want get the fuck out of here. </i></p>,
    //         <p style={{ fontSize: '16px', color: '#000000' }}><strong>Pandemic Monologue</strong></p>,
    //         <p style={{ fontSize: '13px', color: '#000000', maring: '0', marginTop: '-3.5em' }}><i>- My lonely ass in the middle of the pandemic</i></p>,
    //         <p style={{ fontSize: '12px', color: '#900000' }}>This is another prove that learning a new language can cause an existential crisis hahahaha, even though my reflection about my personal situation was totally valid, I’m pretty sure this wouldn’t have happend if I wasn’t taking German classes. Before that, everything was crystal clear, then I started to question my own ideals, after getting to know some German people’s way of life.</p>,
    //     ],
    //     photo: MonologPhoto
    // },
    2: {
        title: 'I still feel like 22.',
        subtitle: 'First take - 28 nov 2022',
        resume: 'My thoughts on 2022',
        article: [
            <p><i><strong>This year</strong></i> wasn’t what I expected, like almost any other year haha. </p>,
            <p><i><strong>This year</strong></i> was fucking hard, had to swallow a couple truths, more than a couple, had so many health problems that I lost count, had to postpone plans I had for most of the year, and so on.</p>,
            <p><i><strong>This year</strong></i> I fell into a routine were nothing out of the normal was happening, and that was driving me crazy, had a dozen existential crisis episodes, changed my mind like a thousand times, and made it up ten thousand times more.</p>,
            <p><i><strong>This year</strong></i> for the first time in my life, had an existential crisis about dying, about accepting my inevitable dead, and the dead of the people I love, about how stupid our existence can be, when all we did while alive was typing on a computer for 50 years while life was happening outside. Had a difficult time accepting that life in general has a sad ending, and there is a beauty in it, despite being raw and unfair.</p>,
            <p><i><strong>This year</strong></i>  I saw how all the flashy and beautiful places I used to visit no longer excite me, they lost their novelty and magic, maybe I got use to them, like we get use to anything in life, maybe I need a change, maybe what really excites me now is the <strong>‘why?’</strong>, and not the <strong>‘where?’</strong></p>,
            <p><i><strong>This year</strong></i>  was great, I also accomplished more than a couple of milestones in my life, I’m very proud of myself, I finally feel like I could give life advice to my 2019 self 😂.</p>
        ],
        photo: ThisYearPhoto
    },
    // 3: {
    //     title: 'High On Music',
    //     subtitle: 'First take - 27 nov 2022',
    //     resume: 'Is it possible to get high on music?',
    //     article: [
    //         <p>Since I first got this feeling of ‘high’, I’ve been asking myself if it is really like being high, like technically, is the brain affected in a similar way to when it is exposed to drugs? It seems it is, kinda.</p>,
    //         <p>To explain myself better, I’m gonna try to describe it, in case you haven’t feel it, It feels like the universe is exploding into your brain, like some kind of numbness, like what you feel when listening to ASMR, but ten times better, it’s like you are having an orgasm in your brain.</p>,
    //         <p>I’ve been reading some articles about this topic, everyone agrees that it is in fact chemically similar to being high, but there isn’t a serious study about it, so I’m just gonna give a personal perspective of why I think it started to happen to me too often.</p>,
    //         <p>I'll basically blame exposure to music in general, because this started to happen more often to me when I was working on a Music House Store. . . I’ve had never listened to so many instruments being played live so many times.</p>,
    //         <p>Here I’m gonna let some songs that make me feel great:</p>,
    //         <p>1. Lana Del Rey - West Coast</p>,
    //         <p>2. кис-кис - рэпер</p>,
    //         <p>3. Metronomy - The Look</p>,
    //         <p>4. Axwell & Ingrosso - Renegade</p>,
    //         <p>5. Alina Baraz - Electric</p>,
    //         <p>6. Kelsey Lu - I’m Not In Love</p>,
    //         <p>7. Serayah - Driving me</p>,
    //         <p>8. Kings of Leon - Wait For Me</p>,
    //         <p>9. The Weeknd - Reminder</p>,
    //         <p>10. Muse - Mercy</p>,
    //         <p>11. Sebastian Ingrosso feat. Alesso - The Calling</p>,
    //         <p>12. кинопамять - не больно</p>,
    //     ],
    //     photo: HighPhoto
    // },
    // 3: {
    //     title: 'Learning to learn',
    //     subtitle: 'First take - 9 nov 2022',
    //     resume: 'It’s really a challenge to suck at something new and doing it anyways.',
    //     article: [
    //         <p>When I started as a programmer I was in a very difficult place personally, and it made it really challenging to suck at being a programmer. Even though I had no talent whatsoever, I was full of <strong><i>survival motivation</i></strong>, which made it possible for me to get what I wanted. Now it’s different.</p>,
    //         <p>I though I learned to learn at that time, I kind of did, but I can’t apply <strong><i>survival motivation</i></strong> to everything hahaha, or I can 😏. It’s fun to use futuristic scenarios where I save the world with my superpowers to get motivation (not that I really believe that, of course), but the real answer for me is patience and coffee . . . and remembering the reason why I started doing things.</p>
    //     ],
    //     photo: AwkwardPhoto
    // },
}