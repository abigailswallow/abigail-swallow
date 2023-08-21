---
title: synThread
tags: [AI, UX-Design, DataViz]
description: "A DataViz that transforms your Spotify listening history into a personalized textile."
projectYear: 2022
projectSummary: "synThread transforms your Spotify listening history into a personalized textile."
previewImage: "https://images.unsplash.com/photo-1687045934883-6b617a084918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
home: true
---

<div id="results">

## Overview

synThread delves into emerging technologies, data science techniques and UX design to create a captivating product concept and data visualization project. ***Our goal? To transform your Spotify listening history into a personalized textile by leveraging new technology to create bespoke visuals.*** The culmination of our efforts materialized in a prototype of the synThread web-app. Users can explore music intertwined with art, as their Spotify history comes to life in the form of interesting textiles.

</div>

<div id="process">

## The Process

### Exploring Spotify Data

Our project was data-driven from the outset, utilizing the Spotify API and Python for data collection and analysis. Unraveling the variables provided by Spotify, we sought to quantify music taste and understand the complicated connections between music theory and cultural preferences. This meant attempting to analyze the variables given to us by Spotify such as, "Valence" or "Danceability" and how they mapped to our real world understanding of the music we listen to. 

### Music Theory Research

Briefly, we explored music theory and historical ways people have translated auditory experiences to the visual world. One particularly interested path of research was that into graphical scores -- the translation of musical scores to visual languages. We also explored precedent of data physicalization and the band t-shirt which served as our physical north star throughout the project. 

### Grouping Songs Into "Moods"

**In order to create personalized textiles based on someone's music taste we needed a way accurately capture the essence of their taste.**

We leveraged a data-science technique, called k-means clustering, to categorize people's favorite songs into similar groups, creating clusters and shared characteristics of songs among diverse musical choices. From these musical clusters, we extracted evocative adjectives like "Ghoulish" and "Sunset" that captured the essence of the clusters of songs.

### Text-to-Image Textile Patterns

Utlizing the adjectives for someone's music taste we fed them into the Stable Diffusion API to generate a personalized textile pattern that captured the unique moods of a person's favorite music. Bridging the gap between technology and art, synThread wove music into tangible and visually captivating images.

## Web-App Design

### Iteration, iteration, iteration

Once we felt confident we had landed on a legitimate way to capture and visualize music taste, we worked on creating a web-app that would allow a person to interact with this concept and explore their own listening history. 

We worked to achieve two goals with our web-app:
1. Provide users an opportunity to explore their music taste in the groupings we created using k-means. 
2. Create excitement around music taste through the lens of personalization

Ultimated we created a tool that celebrates the fusion of technology, data science, and design, by telling someone's music story through textile patterns.

</div>







