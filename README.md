# DEITY

The goal of Deity is to create an AI director of sorts. Its job will be to create a burgeoning town of AI agents and slowly turn that town into a proper city. 
[Here's](https://arxiv.org/pdf/2304.03442v1.pdf) a paper done by Google engineers who did something similar. Their experiment was more for giving each AI agent its own 
autonomy, whereas mine is more for directing them top-down. I don't exactly have the resources to pay for ChatGPT to simulate that many agents and also have those agents
run around and interact at the same time, so the top-down approach is going to require a serious simplification of the agents' behavior. But again, this is more for creating
an AI director that can plan production.

## Rough Architecture
I'm still not entirely sure how this thing is going to work, but there are a few things that I know for sure. First off, you can't just pre-program how a town works. Maybe
you might be able to get away with pre-programming in what the agents need, like food, water, shelter, etc. But today, I think most people would agree that any given society
should provide its citizens with electricity and plumbing. And lots of people would agree that healthcare and internet are also a must. In the future, we might come up with other
infrastructure that we also would eventually deem a right. The chatbot is instead going to have to come up with what the agents need based on what it knows about humans. 

I also cannot preprogram a technology path either. If I had to guess, there's probably going to be a pretty deterministic path of technology based on how it developed in
real life, but I want the AI to see available labor and try to solve problems with either technologies it knows will fix said problems or maybe even speculative technology.
Basically, I'd like to completely avoid pre-programming anything except for some basic AI agent behaviors (that maybe the chatbot can shape later). 

## Goal
I'm not sure what I'm hoping to get out of this. But I think it's going to be cool, and while I've been disappointed with chatbots so far, I still see some incredible
uses for them. Emergent behavior seems somewhat promising. It also seems like you can do some pretty high-level programming if you force the output to be somewhat deterministic.
With the new plugin system that ChatGPT-4 has, you also have a high-level interface for other tasks within a web browser too. Anyway, the technology doesn't quite do what
we expect, but if we keep pushing it, we'll find other uses.
