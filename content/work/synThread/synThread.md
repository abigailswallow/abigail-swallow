---
title: synThread
date: "2022-10-25T00:00:00"
projectYear: 2022
tags: [AI, UX-Design, DataViz]
description: "Transforming your Spotify listening history into a personalized textile."

timeline: "6 Weeks"
role: "UX designer, researcher in a team of 3"
tools: "Figma, Python, Stable Diffusion, Dall-E, OpenCV, Spotify API"
leftImage: "/work/synThread/images/c_synthread_hero.jpg"
leftBackgroundColor: "#e45c3c"

previewImage: "/work/synThread/images/c_synthread_hero.jpg"
home: true

---
    
# The Process

## Our Vision
Create a dynamic data visualization web-app merging music and textiles, transforming Spotify listening history into personalized fabric patterns.

## The Challenge
synThread is a dynamic data visualization web-app that seamlessly merges the realms of music and textiles. Developed as part of the [Master of Design Engineering's](https://mde.harvard.edu/) first-year studio course, the project was a collaborative effort among a team of three, including myself, Gail Alderson and Sophie Leamon. Our challenge was to craft an innovative data visualization concept centered around textiles, culminating in the creation of a personalized fabric design generated from a user's Spotify listening history.

## Our Process
### Music Theory Research

![Graphical Scores](/work/synThread/images/graphicalscores.png)

Tapping into the experts at Harvard's music school we worked to understand how the elements of music (pitch, valence, key, etc.) get translated into feelings, preferences and abstract ideas.
      
### Data-Driven Exploration
We simultaneously explored Spotify's API to understand what variables could be used to categorize someone's music taste. We worked to understand how to take something experienced through listening and translate that into a visual language that resonated with the listener.

We explored all of the variables offered in the Spotify API and compared them with the music our group was familiar with to test how well each of the variables captured the music. 

![API data](/work/synThread/images/apiexploration.png)

### **Insight: The "mood" of a song cannot be described in just a handful of variables.**

We needed a more complex way to analyze and capture someone's music taste across a variety of songs and genres. 

### The Solution

![Process explanation diagram](/work/synThread/images/process.png)

Using Python and k-means clustering, we worked to develop a systems that grouped a user's songs into distinct categories or moods. We captured those categories with an adjective like "energetic" or "melancholy" and used those to generate textile patterns for each distinct mood using Stable Diffusion. To combine those patterns into one I created a script using OpenCV that merged the patterns together. 

## A Web-App Experience to Explore Your Music

### Creating the UX Design & Prototypes
We worked to craft an exploratory experience that would allow a user to 1) Explore their music taste and 2) Create their own music taste textile. 

We developed many prototypes and worked to test them with our user base an assess the usability and functionality of the design. Ultimately, the project culminated in a functioning web-app prototype.

<video controls loop autoplay>
  <source src="/work/synThread/videos/c_demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


## Reflections
synThread was the first project I did that combined my interests in AI and data-science with my love of UX and design. I learned tons from my group members in terms of UX best-practices and data science capabilities, things I've since leveraged to make my projects more technically sound. If I had more time, I'd want to work to better the abstraction process and work to develop a fully functioning web prototype. 

