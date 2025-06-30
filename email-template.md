<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
        .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .section { margin-bottom: 25px; padding: 15px; border-left: 4px solid #2563eb; background: #f8fafc; }
        .section h3 { margin-top: 0; color: #2563eb; }
        .field { margin-bottom: 10px; }
        .label { font-weight: bold; color: #374151; }
        .value { margin-left: 10px; }
        .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 14px; color: #6b7280; }
    </style>
</head>
<body>
    <div class="header">
        <h2>🚀 New Project Inquiry - ChaPaDevs</h2>
        <p>A potential client is interested in working with you!</p>
    </div>
    
    <div class="content">
        <div class="section">
            <h3>👤 Contact Information</h3>
            <div class="field">
                <span class="label">Name:</span>
                <span class="value">{{from_name}}</span>
            </div>
            <div class="field">
                <span class="label">Email:</span>
                <span class="value">{{from_email}}</span>
            </div>
            <div class="field">
                <span class="label">Company:</span>
                <span class="value">{{company_name}}</span>
            </div>
            <div class="field">
                <span class="label">Phone:</span>
                <span class="value">{{phone}}</span>
            </div>
            <div class="field">
                <span class="label">Preferred Contact:</span>
                <span class="value">{{contact_method}}</span>
            </div>
        </div>

        <div class="section">
            <h3>🎯 Project Details</h3>
            <div class="field">
                <span class="label">Project Type:</span>
                <span class="value">{{project_type}}</span>
            </div>
            <div class="field">
                <span class="label">Description:</span>
                <div class="value">{{project_description}}</div>
            </div>
            <div class="field">
                <span class="label">Goals:</span>
                <div class="value">{{goals}}</div>
            </div>
        </div>

        <div class="section">
            <h3>⚙️ Features & Design</h3>
            <div class="field">
                <span class="label">Required Features:</span>
                <div class="value">{{features}}</div>
            </div>
            <div class="field">
                <span class="label">Design Styles:</span>
                <div class="value">{{styles}}</div>
            </div>
        </div>

        <div class="section">
            <h3>⏰ Timeline & Budget</h3>
            <div class="field">
                <span class="label">Budget:</span>
                <span class="value">{{budget}}</span>
            </div>
            <div class="field">
                <span class="label">Timeline:</span>
                <span class="value">{{timeline}}</span>
            </div>
        </div>

        <div class="section">
            <h3>🌐 Current Website</h3>
            <div class="field">
                <span class="label">Has Website:</span>
                <span class="value">{{has_website}}</span>
            </div>
            <div class="field">
                <span class="label">Website URL:</span>
                <span class="value">{{website_url}}</span>
            </div>
            <div class="field">
                <span class="label">Current Host:</span>
                <span class="value">{{current_host}}</span>
            </div>
        </div>

        <div class="section">
            <h3>📋 Additional Details</h3>
            <div class="field">
                <span class="label">Has Branding:</span>
                <span class="value">{{branding}}</span>
            </div>
            <div class="field">
                <span class="label">Content Status:</span>
                <span class="value">{{content_status}}</span>
            </div>
            <div class="field">
                <span class="label">Reference Websites:</span>
                <div class="value">{{reference_websites}}</div>
            </div>
            <div class="field">
                <span class="label">Special Requirements:</span>
                <div class="value">{{special_requirements}}</div>
            </div>
            <div class="field">
                <span class="label">How did you hear about us:</span>
                <span class="value">{{hear_about_us}} {{hear_about_us_other}}</span>
            </div>
            <div class="field">
                <span class="label">Additional Comments:</span>
                <div class="value">{{additional_comments}}</div>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <p><strong>Submitted:</strong> {{submission_date}}</p>
        <p>💡 <strong>Next Step:</strong> Reply directly to {{from_email}} to follow up</p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 15px 0;">
        <p>ChaPaDevs - Building Amazing Websites</p>
    </div>
</body>
</html>