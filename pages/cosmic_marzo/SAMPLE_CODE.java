/**
 * Copyright (c) 2015-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

import com.facebook.ads.sdk.*;
import java.io.File;
import java.util.Arrays;

public class SAMPLE_CODE {
  public static void main (String args[]) throws APIException {

    String access_token = "EAAFOmTDSNMIBO5TceHXfbggXtVWCR8OQOsiL8FLjDn4cYTZA9weWJQds1qyaxpfBJPPwUCtndZBu7lJt5OxBZAxGKVEjEsoqkr8L5AOYefMLdDnhTbGD55r5g3LNDV6L1KAZAuPU3AO07oKfN64BPuGsCJFjr6ObgD0HZCOHbWcGz8gvCkxQpqSeT9SkrWwYy5oe0vhZBd";
    String ad_account_id = "798889658718997";
    String app_secret = "26ad435e9fa8adb03de62d8e7bb5fa0c";
    String page_id = "101937975063400";
    String app_id = "367894832755906";
    APIContext context = new APIContext(access_token).enableDebug(true);

    Campaign campaign = new AdAccount(ad_account_id, context).createCampaign()
      .setName("My Campaign")
      .setBuyingType("AUCTION")
      .setObjective(Campaign.EnumObjective.VALUE_PAGE_LIKES)
      .setStatus(Campaign.EnumStatus.VALUE_PAUSED)
      .execute();
    String campaign_id = campaign.getId();
    AdSet adSet = new AdAccount(ad_account_id, context).createAdSet()
      .setName("My AdSet")
      .setOptimizationGoal(AdSet.EnumOptimizationGoal.VALUE_PAGE_LIKES)
      .setBillingEvent(AdSet.EnumBillingEvent.VALUE_IMPRESSIONS)
      .setBidAmount(20L)
      .setPromotedObject("{\"page_id\": " + page_id + "}")
      .setDailyBudget(1000L)
      .setCampaignId(campaign_id)
      .setTargeting(
          new Targeting()
            .setFieldGeoLocations(
              new TargetingGeoLocation()
                .setFieldCountries(Arrays.asList("US"))
            )
        )
      .setStatus(AdSet.EnumStatus.VALUE_PAUSED)
      .execute();
    String ad_set_id = adSet.getId();
    AdCreative creative = new AdAccount(ad_account_id, context).createAdCreative()
      .setName("My Creative")
      .setObjectId(page_id)
      .setTitle("My Page Like Ad")
      .setBody("Like My Page")
      .setImageUrl("http://www.facebookmarketingdevelopers.com/static/images/resource_1.jpg")
      .execute();
    String creative_id = creative.getId();
    Ad ad = new AdAccount(ad_account_id, context).createAd()
      .setName("My Ad")
      .setAdsetId(ad_set_id)
      .setCreative(
          new AdCreative()
            .setFieldId(creative_id)
        )
      .setStatus(Ad.EnumStatus.VALUE_PAUSED)
      .execute();
    String ad_id = ad.getId();
    new Ad(ad_id, context).getPreviews()
      .setAdFormat(AdPreview.EnumAdFormat.VALUE_DESKTOP_FEED_STANDARD)
      .execute();
  }
}
