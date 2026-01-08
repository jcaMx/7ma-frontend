export type PresentationForm = {
  name: string;
  email: string;
  title: string;
  company: string;
  gender: string;
  bio: string;
  notes: string;
};

const API_BASE = "http://localhost:8000";

export async function createPresentation(form: PresentationForm) {
  const res = await fetch(`${API_BASE}/api/presentation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (!res.ok) {
    throw new Error("Failed to create presentation");
  }

  return res.json() as Promise<{ request_id: string }>;
}

export async function getPresentationStatus(requestId: string) {
  const res = await fetch(`${API_BASE}/api/presentation/${requestId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch status");
  }

  return res.json() as Promise<{
    status: "processing" | "completed" | "error";
    slides_url?: string;
  }>;
}
