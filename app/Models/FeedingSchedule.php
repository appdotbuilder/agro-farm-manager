<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\FeedingSchedule
 *
 * @property int $id
 * @property int $animal_id
 * @property \Illuminate\Support\Carbon $feeding_date
 * @property string $feeding_time
 * @property string $feed_type
 * @property float $amount_kg
 * @property float $cost_per_kg
 * @property float $total_cost
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @property-read \App\Models\Animal $animal
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|FeedingSchedule newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FeedingSchedule newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FeedingSchedule query()
 * @method static \Illuminate\Database\Eloquent\Builder|FeedingSchedule whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeedingSchedule whereAnimalId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeedingSchedule whereFeedingDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeedingSchedule whereFeedingTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeedingSchedule whereFeedType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeedingSchedule whereAmountKg($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeedingSchedule whereCostPerKg($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeedingSchedule whereTotalCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeedingSchedule whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeedingSchedule whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FeedingSchedule whereUpdatedAt($value)

 * 
 * @mixin \Eloquent
 */
class FeedingSchedule extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'animal_id',
        'feeding_date',
        'feeding_time',
        'feed_type',
        'amount_kg',
        'cost_per_kg',
        'total_cost',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'feeding_date' => 'date',
        'amount_kg' => 'decimal:2',
        'cost_per_kg' => 'decimal:2',
        'total_cost' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the animal that owns the feeding schedule.
     */
    public function animal(): BelongsTo
    {
        return $this->belongsTo(Animal::class);
    }
}