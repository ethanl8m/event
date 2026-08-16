import { toJpeg } from 'html-to-image';

export const handlePrintPdf = () => {
  window.print();
};

export const handleDownloadJpg = async (
  containerId: string = 'page-export-container',
  filename: string = 'iFAST_Executive_Strategy_Briefing_2026.jpg',
  onStart?: () => void,
  onComplete?: () => void,
  onError?: (err: any) => void
) => {
  try {
    if (onStart) onStart();

    const element = document.getElementById(containerId) || document.body;

    // Use html-to-image which renders via native browser SVG canvas, fully supporting Tailwind v4 oklab/oklch
    const dataUrl = await toJpeg(element, {
      quality: 0.95,
      backgroundColor: '#FFFFFF',
      pixelRatio: 2,
      filter: (node) => {
        // Hide elements with 'no-print' class during export if appropriate
        if (node instanceof HTMLElement && node.classList.contains('no-print')) {
          return false;
        }
        return true;
      },
    });

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (onComplete) onComplete();
  } catch (err) {
    console.error('Failed to export JPG:', err);
    if (onError) onError(err);
    if (onComplete) onComplete();
  }
};

