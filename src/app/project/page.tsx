import React from 'react';

interface Project {
  _id: string;
  id: string;
  name: string;
  description: string;
  price: string;
  youtube_url: string | null;
  category: string;
  programming_language: string;
  created_at: string;
  updated_at?: string;
}

async function getProjectDetails(projectId: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/projects/${projectId}`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch project details');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}

export default async function HelloPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let project: Project | null = null;
  let error = null;

  const projectId = searchParams?.id as string;

  if (!projectId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600">No project ID provided</p>
        </div>
      </div>
    );
  }

  try {
    project = await getProjectDetails(projectId);
  } catch (e) {
    error = e instanceof Error ? e.message : 'An error occurred';
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse">
          <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h1>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Description</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">Category</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">Programming Language</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    {project.programming_language}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">Price</h2>
                  <p className="text-gray-600 font-semibold">{project.price}</p>
                </div>

                {project.youtube_url && (
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">YouTube Video</h2>
                    <a 
                      href={project.youtube_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">Created At</h2>
                  <p className="text-gray-600">
                    {new Date(project.created_at).toLocaleDateString()}
                  </p>
                </div>

                {project.updated_at && (
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">Last Updated</h2>
                    <p className="text-gray-600">
                      {new Date(project.updated_at).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 