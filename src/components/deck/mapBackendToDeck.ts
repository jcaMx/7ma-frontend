// src/components/deck/mapBackendToDeck.ts

const capabilityImages: Record<string, string> = {
  "Inform": "/src/assets/capability/inform.png",
  "Create & Edit": "/src/assets/capability/create.png",
  "Organize": "/src/assets/capability/organize.png",
  "Transform": "/src/assets/capability/transform.png",
  "Analyze": "/src/assets/capability/analyze.png",
  "Personify or Simulate": "/src/assets/capability/personify.png",
  "Explore & Guide": "/src/assets/capability/explore.png",
};

const capabilityAudio: Record<string, string> = {
  "Inform": "/assets/audio/Inform.mp3",
  "Create & Edit": "/assets/audio/CreateAndEdit.mp3",
  "Organize": "/assets/audio/Organize.mp3",
  "Transform": "/assets/audio/Transform.mp3",
  "Analyze": "/assets/audio/Analyze.mp3",
  "Personify or Simulate": "/assets/audio/Personify.mp3",
  "Explore & Guide": "/assets/audio/Explore.mp3",
};

export function mapBackendToDeck(raw: any) {
  const user = raw.user_input;
  const profile = raw.fictional_profile;

  const capabilityIntro = [
    {
      id: "inform-intro",
      type: "capability_intro",
      data: {
        capability: "Inform",
        description: "Turn scattered data into clear, reliable answers that support faster learning, smarter decisions, and confident conversations.",
        imageUrl: "/src/assets/capability/inform.png",
        audioUrl: "/assets/audio/Inform.mp3",
      },
    },
    {
      id: "create-intro",
      type: "capability_intro",
      data: {
        capability: "Create & Edit",
        description: "Generate polished content from rough ideas, then refine and enhance it to match your goals.",
        imageUrl: "/src/assets/capability/create.png",
        audioUrl: "/assets/audio/CreateAndEdit.mp3",
      },
    },
    {
      "id": "organize-intro",
      "type": "capability_intro",
      "data": {
        "capability": "Organize",
        "description": "Bring order to complexity by grouping, prioritizing, and structuring information for better visibility and decision-making.",
        "imageUrl": "/src/assets/capability/organize.png",
        "audioUrl": "/assets/audio/Organize.mp3"
      }
    },
    {
      "id": "transform-intro",
      "type": "capability_intro",
      "data": {
        "capability": "Transform",
        "description": "Convert information from one format to another—turn text into tables, data into visuals, and ideas into polished deliverables.",
        "imageUrl": "/src/assets/capability/transform.png",
        "audioUrl": "/assets/audio/Transform.mp3"
      }
    },
    {
      "id": "analyze-intro",
      "type": "capability_intro",
      "data": {
        "capability": "Analyze",
        "description": "Turn raw data into insights by summarizing, highlighting patterns, and surfacing key information that drives decisions.",
        "imageUrl": "/src/assets/capability/analyze.png",
        "audioUrl": "/assets/audio/Analyze.mp3"
      }
    },
    {
      "id": "personify-intro",
      "type": "capability_intro",
      "data": {
        "capability": "Personify or Simulate",
        "description": "Simulate characters, roles, or perspectives to explore ideas, anticipate reactions, and roleplay complex conversations.",
        "imageUrl": "/src/assets/capability/personify.png",
        "audioUrl": "/assets/audio/Personify.mp3"
      }
    },
    {
      "id": "explore-intro",
      "type": "capability_intro",
      "data": {
        "capability": "Explore & Guide",
        "description": "Navigate uncertainty with confidence by exploring options, evaluating trade-offs, and making informed decisions.",
        "imageUrl": "/src/assets/capability/explore.png",
        "audioUrl": "/assets/audio/Explore.mp3"
      }
    },
  ]

  const capabilitySlides = raw.capability_use_cases.flatMap((useCase: any) => {
    const intro = capabilityIntro.find(
      (item) => item.data.capability === useCase.capability
    );
    return [
      intro || {
        id: `${useCase.capability}-intro`,
        type: "capability_intro",
        data: {
          capability: useCase.capability,
          imageUrl: capabilityImages[useCase.capability],
          audioUrl: capabilityAudio[useCase.capability],
          description: "",
        },
      },
      {
        id: `${useCase.capability}-use-case`,
        type: "capability_use_case",
        data: {
          capability: useCase.capability,
          title: useCase.name,
          scenario: useCase.scenario,
          solution: useCase.solution,
        },
      },
    ];
  });

  return {
    deck_id: user.folder_path,
    prospect: {
      name: user.name,
      title: user.title,
      company: user.company,
    },
    slides: [
      {
        id: "cover",
        type: "cover",
        data: {
          prospectName: user.name,
          company: user.company,
        },
      },
      {
        id: "welcome",
        type: "text_left",
        data: {
          title: "Welcome to Seven Moves Ahead",
          subtitle:
            "Discover how AI can amplify your impact—one capability at a time.",
        },
      },
      {
        id: "profile",
        type: "profile",
        data: {
          name: profile.name,
          profile: profile.narrative,
          avatarUrl: "/assets/profile/default.png",
          audioUrl: "/assets/audio/profile.mp3",
        },
      },
      ...capabilitySlides,
      {
        id: "next-moves",
        type: "text_center",
        data: {
          title: "Next Moves",
          subtitle:
            "Start your personalized path to AI productivity and next-level results.",
        },
      },
      {
        id: "personalized-plan",
        type: "text_left",
        data: {
          title: "Personalized Plan. Real Results.",
          subtitle:
            "A quick discovery process that leads to fast wins with AI—no guesswork required.",
        },
      },
      {
        id: "communication",
        type: "text_left",
        data: {
          title: "It’s Not Prompt Engineering—It’s Communication.",
          subtitle:
            "Learn how to get better results by treating AI like a highly capable human assistant.",
        },
      },
      {
        id: "next-level",
        type: "text_left",
        data: {
          title: "Take It to the Next Level",
          subtitle:
            "Discover how to guide, refine, and shape AI responses with expert precision.",
        },
      },
      {
        id: "closing",
        type: "text_center",
        data: {
          title: "Let’s Get to Work",
          subtitle:
            "You’ve seen what’s possible—now it’s time to make it happen.",
        },
      },
    ],
  };
}