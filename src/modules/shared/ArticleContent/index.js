import AwkwardPhoto from '../images/pngs/awkward.png';
import RusiaPhoto from '../images/pngs/rusia.png';
import KisKisPhoto from '../images/pngs/kiskis.png';
import HighPhoto from '../images/pngs/highonmusic.png';
import './styles.css';

export const articleContent = {
    0: {
        title: 'RAZIIIIYA!!!',
        subtitle: 'First take - 9 nov 2022',
        resume: 'How little things get you into big things.',
        article: [
            <p>When I was a little girl, I was afraid of everything, literally. I was afraid of my own shadow and the twilight (not the movie, the real one hahaha), so I know my little me would be surprised and terrified if I told her about my language interests, because, yeah . . . I was afraid of how Russian people sound in movies.</p>,
            <p>Learning a new language is an adventure, you have to be willing to get into a new world of possibilities and problems. Learning English was easy in some ways, it really is everywhere now, and it’s very difficult to escape from it. </p>,
            <p>When I got into Russian, it was a very random decision, I didn’t plan to learn it, but I had a little unconscious story with it since 2018, when I found the song that would change everything when stalking a collegue xD <strong><i>(Sudno)</i></strong>, then youtube conspired (spied on me) and showed me a new song, then I got to know a Russian girl, then more music came into the picture and finally . . . the Ukranian war.</p>,
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
            <p style={{ fontSize: '13px', color: '#000000', maring: '0', marginTop: '-3.5em' }}><i>- Someone at a concert</i></p>,
            <p style={{ color: '#B09E9E' }}>When I was a kid, <a href='https://www.facebook.com/comunaarea7' target="_blank" style={{ color: '#6A3A3A', fontWeight: '600' }}>Area 7</a> used to do practice sessions on the garage of  the building where I lived, I'm gonna give them the credit for my love for <a href='https://www.facebook.com/kiskisnotdead' target="_blank" style={{ color: '#6A3A3A', fontWeight: '600' }}>кис-кис</a>.</p>,
            <p style={{ color: '#B09E9E' }}>This video unlocked a childhood memory I didn’t know I had.</p>,
            <video className='RapperVideo' controls="controls">
            <source src={require('./rapper.mp4')} type="video/mp4"/>
            Your browser does not support the video functionality.
        </video>
        ],
        photo: KisKisPhoto
    },
    2: {
        title: 'High On Music',
        subtitle: 'First take - 27 nov 2022',
        resume: 'Is it possible to get high on music?',
        article: [
            <p>Since I first got this feeling of ‘high’, I’ve been asking myself if it is really like being high, like technically, is the brain affected in a similar way to when it is exposed to drugs? It seems it is, kinda.</p>,
            <p>To explain myself better, I’m gonna try to describe it, in case you haven’t feel it, It feels like the universe is exploding into your brain, like some kind of numbness, like what you feel when listening to ASMR, but ten times better, it’s like you are having an orgasm in your brain.</p>,
            <p>I’ve been reading some articles about this topic, everyone agrees that it is in fact chemically similar to being high, but there isn’t a serious study about it, so I’m just gonna give a personal perspective of why I think it started to happen to me too often.</p>,
            <p>I'll basically blame exposure to music in general, because this started to happen more often to me when I was working on a Music House Store. . . I’ve had never listened to so many instruments being played live so many times.</p>,
            <p>Here I’m gonna let some songs that make me feel great:</p>,
            <p>1. Lana Del Rey - West Coast</p>,
            <p>2. кис-кис - рэпер</p>,
            <p>3. Metronomy - The Look</p>,
            <p>4. Axwell & Ingrosso - Renegade</p>,
            <p>5. Alina Baraz - Electric</p>,
            <p>6. Kelsey Lu - I’m Not In Love</p>,
            <p>7. Serayah - Driving me</p>,
            <p>8. Kings of Leon - Wait For Me</p>,
            <p>9. The Weeknd - Reminder</p>,
            <p>10. Muse - Mercy</p>,
            <p>11. Sebastian Ingrosso feat. Alesso - The Calling</p>,
            <p>12. кинопамять - не больно</p>,
        ],
        photo: HighPhoto
    },
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