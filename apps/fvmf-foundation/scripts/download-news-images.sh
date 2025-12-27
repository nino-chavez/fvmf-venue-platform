#!/bin/bash

# News Posts Image Downloader
# Downloads all images for the 6 news posts from FVMF website

# Create directory for downloaded images
mkdir -p public/images/news-posts

echo "📥 Downloading images for FVMF news posts..."
echo ""

# Post 1: Inclusive Holiday Concert
echo "1/6 - Downloading Inclusive Holiday Concert images..."
curl -L "https://static.wixstatic.com/media/05fab7_fb45c7693c5b418d89e41c6baadec59d~mv2.png/v1/fill/w_750,h_525,al_c,q_90,enc_avif,quality_auto/AWE%20442x442.png" -o public/images/news-posts/inclusive-holiday-card.png
curl -L "https://static.wixstatic.com/media/f4f18f_2b88c4999f2c4688a874cd009470c868~mv2.png/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/f4f18f_2b88c4999f2c4688a874cd009470c868~mv2.png" -o public/images/news-posts/inclusive-holiday-hero.png

# Post 2: Painter Lewis Achenbach
echo "2/6 - Downloading Painter Lewis Achenbach images..."
curl -L "https://static.wixstatic.com/media/05fab7_accb7b6321974013ae6ca791edf779ec~mv2.png/v1/fill/w_880,h_616,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/AWE%20442x309.png" -o public/images/news-posts/achenbach-delmark-card.png

# Post 3: FVMF & Delmark Records 2nd Masterclass
echo "3/6 - Downloading Delmark Masterclass images..."
curl -L "https://static.wixstatic.com/media/05fab7_6c7ece975d1a45dd99765eebe5fc5be3~mv2.png/v1/fill/w_880,h_616,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/AWE%20442x309.png" -o public/images/news-posts/delmark-masterclass-card.png

# Post 4: She Said Series - Lynne Jordan
echo "4/6 - Downloading She Said Series images..."
curl -L "https://static.wixstatic.com/media/05fab7_6cd324fe5d594f9686fa51faaf10bc4b~mv2.png/v1/fill/w_750,h_525,al_c,q_90,enc_avif,quality_auto/AWE%20442x309.png" -o public/images/news-posts/she-said-lynne-card.png

# Post 5: Jazz Sessions
echo "5/6 - Downloading Jazz Sessions images..."
curl -L "https://static.wixstatic.com/media/05fab7_37d3af75563b42c389cc1fb17697ee60~mv2.jpg/v1/fill/w_880,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AWE%20442x309.jpg" -o public/images/news-posts/jazz-sessions-card.jpg

# Post 6: Dunham Foundation Grant
echo "6/6 - Downloading Dunham Foundation Grant images..."
curl -L "https://static.wixstatic.com/media/05fab7_97798b5aceba47e39a1ec42250736194~mv2.png/v1/fill/w_880,h_616,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/AWE%20442x309.png" -o public/images/news-posts/dunham-grant-card.png

echo ""
echo "✅ All images downloaded to: public/images/news-posts/"
echo ""
echo "📋 Downloaded files:"
ls -lh public/images/news-posts/
echo ""
echo "🎯 Next steps:"
echo "1. Open Sanity Studio: http://localhost:3001/studio"
echo "2. Navigate to News & Updates"
echo "3. For each post, upload the corresponding images from public/images/news-posts/"
echo "4. Add the alt text from NEWS_POSTS_IMAGE_GUIDE.md"
echo "5. Click Publish"
