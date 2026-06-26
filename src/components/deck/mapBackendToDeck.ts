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
  "Inform": "/assets/audio/03-static-intro-capabilities.mp3",
  "Create & Edit": "/assets/audio/03-static-intro-capabilities.mp3",
  "Organize": "/assets/audio/03-static-intro-capabilities.mp3",
  "Transform": "/assets/audio/03-static-intro-capabilities.mp3",
  "Analyze": "/assets/audio/03-static-intro-capabilities.mp3",
  "Personify or Simulate": "/assets/audio/03-static-intro-capabilities.mp3",
  "Explore & Guide": "/assets/audio/03-static-intro-capabilities.mp3",
};

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

function sanitizeFilename(value: string) {
  return value.trim().replace(/ /g, "_").replace(/[^a-zA-Z0-9_-]/g, "_");
}

export function mapBackendToDeck(raw: any, requestId?: string) {
  const user = raw.user_input;
  const profile = raw.fictional_profile;

  const folderName = user.folder_path || user.name || "anonymous";
  const folderPrefix = sanitizeFilename(folderName).toLowerCase();

  const getAudioUrlForCapability = (capability: string, index: number) => {
    if (!requestId) {
      return capabilityAudio[capability];
    }
    const label = capability.trim().toLowerCase().match(/[a-z0-9]+/)?.[0] || capability.toLowerCase();
    return `${API_BASE}/api/presentation/${requestId}/audio/${folderPrefix}_capability_${index}_${label}.mp3`;
  };

  const capabilityIntro = [
    {
      id: "inform-intro",
      type: "capability_intro",
      data: {
        capability: "Inform",
        description: "Turn scattered data into clear, reliable answers that support faster learning, smarter decisions, and confident conversations.",
        imageUrl: "/src/assets/capability/inform.png",
        audioUrl: getAudioUrlForCapability("Inform", 1),
      },
    },
    {
      id: "create-intro",
      type: "capability_intro",
      data: {
        capability: "Create & Edit",
        description: "Generate polished content from rough ideas, then refine and enhance it to match your goals.",
        imageUrl: "/src/assets/capability/create.png",
        audioUrl: getAudioUrlForCapability("Create & Edit", 2),
      },
    },
    {
      "id": "organize-intro",
      "type": "capability_intro",
      "data": {
        "capability": "Organize",
        "description": "Bring order to complexity by grouping, prioritizing, and structuring information for better visibility and decision-making.",
        "imageUrl": "/src/assets/capability/organize.png",
        "audioUrl": getAudioUrlForCapability("Organize", 3),
      }
    },
    {
      "id": "transform-intro",
      "type": "capability_intro",
      "data": {
        "capability": "Transform",
        "description": "Convert information from one format to another—turn text into tables, data into visuals, and ideas into polished deliverables.",
        "imageUrl": "/src/assets/capability/transform.png",
        "audioUrl": getAudioUrlForCapability("Transform", 4),
      }
    },
    {
      "id": "analyze-intro",
      "type": "capability_intro",
      "data": {
        "capability": "Analyze",
        "description": "Turn raw data into insights by summarizing, highlighting patterns, and surfacing key information that drives decisions.",
        "imageUrl": "/src/assets/capability/analyze.png",
        "audioUrl": getAudioUrlForCapability("Analyze", 5),
      }
    },
    {
      "id": "personify-intro",
      "type": "capability_intro",
      "data": {
        "capability": "Personify or Simulate",
        "description": "Simulate characters, roles, or perspectives to explore ideas, anticipate reactions, and roleplay complex conversations.",
        "imageUrl": "/src/assets/capability/personify.png",
        "audioUrl": getAudioUrlForCapability("Personify or Simulate", 6),
      }
    },
    {
      "id": "explore-intro",
      "type": "capability_intro",
      "data": {
        "capability": "Explore & Guide",
        "description": "Navigate uncertainty with confidence by exploring options, evaluating trade-offs, and making informed decisions.",
        "imageUrl": "/src/assets/capability/explore.png",
        "audioUrl": getAudioUrlForCapability("Explore & Guide", 7),
      }
    },
  ]

  const capabilitySlides = raw.capability_use_cases.flatMap((useCase: any, useCaseIndex: number) => {
    const index = useCaseIndex + 1;
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
          audioUrl: getAudioUrlForCapability(useCase.capability, index),
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
          audioUrl: getAudioUrlForCapability(useCase.capability, index),
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
          subtitle: "Discover how AI can amplify your impact—one capability at a time.",
          audioUrl: "/assets/audio/01-static-intro-welcome.mp3",
        },
      },
      {
        id: "profile",
        type: "profile",
        data: {
          name: profile.name,
          profile: profile.narrative,
          audioUrl: "/assets/audio/02-static-intro-fictionalprofile.mp3",
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
          audioUrl: "/assets/audio/static-next-moves.mp3",
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
          audioUrl: "/assets/audio/static-next-communication.mp3",
        },
      },
      {
        id: "next-level",
        type: "text_left",
        data: {
          title: "Take It to the Next Level",
          subtitle:
            "Discover how to guide, refine, and shape AI responses with expert precision.",
          audioUrl: "/assets/audio/static-next-techniques.mp3",
        },
      },
      {
        id: "closing",
        type: "text_center",
        data: {
          title: "Let’s Get to Work",
          subtitle:
            "You’ve seen what’s possible—now it’s time to make it happen.",
          audioUrl: "/assets/audio/static-conclusion.mp3",
        },
      },
    ],
  };
}