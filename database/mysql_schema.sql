-- ====================================================================
-- HUMANITY FIRST BD - DATABASE SCHEMA (MySQL / MariaDB)
-- Database Name: humanity_first_bd_db
-- ====================================================================

CREATE DATABASE IF NOT EXISTS `humanity_first_bd_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `humanity_first_bd_db`;

-- 1. SITE SETTINGS & CONFIGURATION
CREATE TABLE IF NOT EXISTS `site_settings` (
  `id` VARCHAR(100) NOT NULL DEFAULT 'site_content_default',
  `org_name_en` VARCHAR(255) NOT NULL DEFAULT 'Humanity First BD',
  `org_name_bn` VARCHAR(255) NOT NULL DEFAULT 'হিউম্যানিটি ফাস্ট বিডি',
  `org_tagline_en` TEXT NOT NULL,
  `org_tagline_bn` TEXT NOT NULL,
  `reg_info_en` VARCHAR(255) NOT NULL DEFAULT 'Registered under NGO Affairs Bureau Bangladesh (Reg No: 2847)',
  `reg_info_bn` VARCHAR(255) NOT NULL DEFAULT 'এনজিও বিষয়ক ব্যুরো বাংলাদেশ নিবন্ধিত (রেজি নং: ২৮৪৭)',
  `tax_info_en` VARCHAR(255) NOT NULL DEFAULT '100% Tax Exempted Charity under Section 44(4) of Income Tax Act',
  `tax_info_bn` VARCHAR(255) NOT NULL DEFAULT 'আয়কর আইনের ৪৪(৪) ধারা অনুযায়ী ১০০% কর অব্যাহতির সুবিধাপ্রাপ্ত',
  `emergency_ticker_en` TEXT,
  `emergency_ticker_bn` TEXT,
  `hotline_en` VARCHAR(100),
  `hotline_bn` VARCHAR(100),
  `email_en` VARCHAR(255),
  `email_bn` VARCHAR(255),
  `whatsapp_en` VARCHAR(100),
  `whatsapp_bn` VARCHAR(100),
  `address_en` TEXT,
  `address_bn` TEXT,
  `nav_json` JSON NOT NULL,
  `quick_donate_json` JSON NOT NULL,
  `counters_json` JSON NOT NULL,
  `bank_details_json` JSON NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. ABOUT ORGANIZATION DATA
CREATE TABLE IF NOT EXISTS `about_organization` (
  `id` VARCHAR(100) NOT NULL DEFAULT 'about_default',
  `hero_title_en` VARCHAR(255) NOT NULL,
  `hero_title_bn` VARCHAR(255) NOT NULL,
  `hero_subtitle_en` TEXT NOT NULL,
  `hero_subtitle_bn` TEXT NOT NULL,
  `overview_en` TEXT NOT NULL,
  `overview_bn` TEXT NOT NULL,
  `zakat_policy_en` TEXT NOT NULL,
  `zakat_policy_bn` TEXT NOT NULL,
  `core_values_json` JSON NOT NULL,
  `history_milestones_json` JSON NOT NULL,
  `stats_json` JSON NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. MISSION & VISION
CREATE TABLE IF NOT EXISTS `mission_vision` (
  `id` VARCHAR(100) NOT NULL DEFAULT 'mission_vision_default',
  `mission_title_en` VARCHAR(255) NOT NULL,
  `mission_title_bn` VARCHAR(255) NOT NULL,
  `mission_desc_en` TEXT NOT NULL,
  `mission_desc_bn` TEXT NOT NULL,
  `mission_points_json` JSON NOT NULL,
  `vision_title_en` VARCHAR(255) NOT NULL,
  `vision_title_bn` VARCHAR(255) NOT NULL,
  `vision_desc_en` TEXT NOT NULL,
  `vision_desc_bn` TEXT NOT NULL,
  `vision_points_json` JSON NOT NULL,
  `roadmap_year` VARCHAR(50) DEFAULT '2030',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. LEADERSHIP & STAFF MEMBERS
CREATE TABLE IF NOT EXISTS `leadership_members` (
  `id` VARCHAR(100) NOT NULL,
  `member_type` VARCHAR(30) NOT NULL, -- 'chairman', 'ceo', 'board', 'staff'
  `name_en` VARCHAR(255) NOT NULL,
  `name_bn` VARCHAR(255) NOT NULL,
  `role_en` VARCHAR(255) NOT NULL,
  `role_bn` VARCHAR(255) NOT NULL,
  `designation_en` VARCHAR(255) NOT NULL,
  `designation_bn` VARCHAR(255) NOT NULL,
  `image_url` TEXT NOT NULL,
  `bio_en` TEXT NOT NULL,
  `bio_bn` TEXT NOT NULL,
  `message_en` TEXT,
  `message_bn` TEXT,
  `quote_en` TEXT,
  `quote_bn` TEXT,
  `email` VARCHAR(255),
  `phone` VARCHAR(100),
  `department` VARCHAR(100),
  `joined_year` VARCHAR(50),
  `display_order` INT DEFAULT 0,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. CAMPAIGNS
CREATE TABLE IF NOT EXISTS `campaigns` (
  `id` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(191) NOT NULL,
  `title_en` VARCHAR(255) NOT NULL,
  `title_bn` VARCHAR(255) NOT NULL,
  `summary_en` TEXT NOT NULL,
  `summary_bn` TEXT NOT NULL,
  `description_en` TEXT NOT NULL,
  `description_bn` TEXT NOT NULL,
  `category` VARCHAR(50) NOT NULL, -- 'emergency', 'education', 'water', 'healthcare', 'zakat', 'ramadan'
  `image_url` TEXT NOT NULL,
  `goal_amount` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  `raised_amount` DECIMAL(12,2) NOT NULL DEFAULT 0.00,
  `donor_count` INT DEFAULT 0,
  `days_left` INT DEFAULT 30,
  `is_zakat_eligible` TINYINT(1) DEFAULT 1,
  `is_emergency` TINYINT(1) DEFAULT 0,
  `location_en` VARCHAR(255),
  `location_bn` VARCHAR(255),
  `expense_breakdown_json` JSON,
  `updates_json` JSON,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_campaigns_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. DONATIONS
CREATE TABLE IF NOT EXISTS `donations` (
  `id` VARCHAR(100) NOT NULL,
  `campaign_id` VARCHAR(100),
  `campaign_title_en` VARCHAR(255),
  `campaign_title_bn` VARCHAR(255),
  `donor_name` VARCHAR(255) NOT NULL,
  `amount` DECIMAL(12,2) NOT NULL,
  `currency` VARCHAR(10) DEFAULT 'BDT',
  `payment_method` VARCHAR(50) NOT NULL,
  `trx_id` VARCHAR(100) NOT NULL,
  `is_anonymous` TINYINT(1) DEFAULT 0,
  `tax_exemption_requested` TINYINT(1) DEFAULT 0,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_donations_campaign` (`campaign_id`),
  CONSTRAINT `fk_donations_campaign` FOREIGN KEY (`campaign_id`) REFERENCES `campaigns` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. FEATURED DONORS
CREATE TABLE IF NOT EXISTS `featured_donors` (
  `id` VARCHAR(100) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `tier` VARCHAR(50) NOT NULL, -- 'platinum', 'gold', 'silver', 'bronze', 'zakat', 'corporate'
  `amount_bdt` DECIMAL(12,2) NOT NULL,
  `currency` VARCHAR(10) DEFAULT 'BDT',
  `avatar_url` TEXT NOT NULL,
  `location_en` VARCHAR(255) NOT NULL,
  `location_bn` VARCHAR(255) NOT NULL,
  `badge_en` VARCHAR(255) NOT NULL,
  `badge_bn` VARCHAR(255) NOT NULL,
  `campaign_title_en` VARCHAR(255) NOT NULL,
  `campaign_title_bn` VARCHAR(255) NOT NULL,
  `date_str` VARCHAR(50) NOT NULL,
  `is_anonymous` TINYINT(1) DEFAULT 0,
  `quote_en` TEXT,
  `quote_bn` TEXT,
  `is_corporate` TINYINT(1) DEFAULT 0,
  `company_logo` TEXT,
  `trx_id` VARCHAR(100) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. PHOTO GALLERY ALBUMS
CREATE TABLE IF NOT EXISTS `photo_albums` (
  `id` VARCHAR(100) NOT NULL,
  `title_en` VARCHAR(255) NOT NULL,
  `title_bn` VARCHAR(255) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `cover_image` TEXT NOT NULL,
  `date_str` VARCHAR(50) NOT NULL,
  `location_en` VARCHAR(255),
  `location_bn` VARCHAR(255),
  `images_json` JSON NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 9. VIDEO GALLERY
CREATE TABLE IF NOT EXISTS `video_items` (
  `id` VARCHAR(100) NOT NULL,
  `title_en` VARCHAR(255) NOT NULL,
  `title_bn` VARCHAR(255) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `thumbnail_url` TEXT NOT NULL,
  `youtube_id` VARCHAR(100) NOT NULL,
  `duration` VARCHAR(50) NOT NULL,
  `date_str` VARCHAR(50) NOT NULL,
  `summary_en` TEXT,
  `summary_bn` TEXT,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 10. BLOG POSTS
CREATE TABLE IF NOT EXISTS `blog_posts` (
  `id` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(191) NOT NULL,
  `title_en` VARCHAR(255) NOT NULL,
  `title_bn` VARCHAR(255) NOT NULL,
  `summary_en` TEXT NOT NULL,
  `summary_bn` TEXT NOT NULL,
  `content_en` TEXT NOT NULL,
  `content_bn` TEXT NOT NULL,
  `category_en` VARCHAR(100) NOT NULL,
  `category_bn` VARCHAR(100) NOT NULL,
  `author_name` VARCHAR(255) NOT NULL,
  `author_role_en` VARCHAR(255),
  `author_role_bn` VARCHAR(255),
  `author_avatar` TEXT,
  `cover_image` TEXT NOT NULL,
  `published_at` VARCHAR(50) NOT NULL,
  `read_time_minutes` INT DEFAULT 5,
  `tags_json` JSON,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_blog_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 11. NEWS & PRESS RELEASES
CREATE TABLE IF NOT EXISTS `news_items` (
  `id` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(191) NOT NULL,
  `title_en` VARCHAR(255) NOT NULL,
  `title_bn` VARCHAR(255) NOT NULL,
  `summary_en` TEXT NOT NULL,
  `summary_bn` TEXT NOT NULL,
  `content_en` TEXT NOT NULL,
  `content_bn` TEXT NOT NULL,
  `source_en` VARCHAR(255),
  `source_bn` VARCHAR(255),
  `cover_image` TEXT NOT NULL,
  `pdf_url` TEXT,
  `published_at` VARCHAR(50) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_news_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 12. SPONSORSHIPS
CREATE TABLE IF NOT EXISTS `sponsorships` (
  `id` VARCHAR(100) NOT NULL,
  `title_en` VARCHAR(255) NOT NULL,
  `title_bn` VARCHAR(255) NOT NULL,
  `type` VARCHAR(50) NOT NULL, -- 'orphan', 'student', 'family'
  `child_name` VARCHAR(255) NOT NULL,
  `age` INT NOT NULL,
  `gender` VARCHAR(20) NOT NULL,
  `location_en` VARCHAR(255) NOT NULL,
  `location_bn` VARCHAR(255) NOT NULL,
  `monthly_amount_bdt` DECIMAL(10,2) NOT NULL,
  `image_url` TEXT NOT NULL,
  `academic_grade` VARCHAR(50) NOT NULL,
  `story_en` TEXT NOT NULL,
  `story_bn` TEXT NOT NULL,
  `is_sponsored` TINYINT(1) DEFAULT 0,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 13. AUDIT REPORTS
CREATE TABLE IF NOT EXISTS `audit_reports` (
  `id` VARCHAR(100) NOT NULL,
  `year_str` VARCHAR(50) NOT NULL,
  `title_en` VARCHAR(255) NOT NULL,
  `title_bn` VARCHAR(255) NOT NULL,
  `pdf_url` TEXT NOT NULL,
  `file_size` VARCHAR(50) NOT NULL,
  `auditor_name` VARCHAR(255) NOT NULL,
  `summary_en` TEXT NOT NULL,
  `summary_bn` TEXT NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 14. EVENTS
CREATE TABLE IF NOT EXISTS `events` (
  `id` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(191) NOT NULL,
  `title_en` VARCHAR(255) NOT NULL,
  `title_bn` VARCHAR(255) NOT NULL,
  `description_en` TEXT NOT NULL,
  `description_bn` TEXT NOT NULL,
  `event_date` VARCHAR(50) NOT NULL,
  `time_str` VARCHAR(50) NOT NULL,
  `location_en` VARCHAR(255) NOT NULL,
  `location_bn` VARCHAR(255) NOT NULL,
  `image_url` TEXT NOT NULL,
  `category_en` VARCHAR(100) NOT NULL,
  `category_bn` VARCHAR(100) NOT NULL,
  `registered_count` INT DEFAULT 0,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_events_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 15. FAQS
CREATE TABLE IF NOT EXISTS `faqs` (
  `id` VARCHAR(100) NOT NULL,
  `category` VARCHAR(50) NOT NULL, -- 'zakat', 'donation', 'volunteer', 'transparency'
  `question_en` TEXT NOT NULL,
  `question_bn` TEXT NOT NULL,
  `answer_en` TEXT NOT NULL,
  `answer_bn` TEXT NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 16. VOLUNTEERS
CREATE TABLE IF NOT EXISTS `volunteers` (
  `id` VARCHAR(100) NOT NULL,
  `full_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(100) NOT NULL,
  `district` VARCHAR(100) NOT NULL,
  `upazila` VARCHAR(100),
  `skills` TEXT,
  `availability` VARCHAR(50),
  `motivation` TEXT,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
